import { LitElement, html, css } from "lit";
import { translate as t } from "lit-i18n";
import { v4 as uuidv4 } from "uuid";
import { Router } from "@vaadin/router";
import IMask from "imask";

import { store } from "../util/store/index.js";
import { BaseComponent } from "../util/store/base-component.js";
import {
  FORM_DATA,
  FORM_DATA_SELECT,
  isEmail,
  isEmpty,
  isValidBirthDate,
  isValidDate,
} from "./../util/index.js";

import "./components/shared.container.js";
import "./components/dialog-modal.js";

class FormItem extends BaseComponent {
  static styles = [
    css`
      form {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;

        width: 90%;
        max-width: 300px;
      }

      label {
        font-size: 14px;
        font-weight: 500;
        color: #333;

        display: inline-block;
        margin-bottom: 5px;
      }

      input {
        padding: 10px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 5px;
        width: 100%;
        box-sizing: border-box;
      }

      select {
        padding: 10px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 5px;
        width: 100%;
        box-sizing: border-box;
      }

      input:focus,
      select:focus {
        outline: none;
      }

      input.invalid,
      select.invalid {
        border: 1px solid red;
      }

      button {
        background-color: var(--main-color);
        color: white;
        padding: 10px 20px;
        font-size: 16px;
        border: none;
        border-radius: 5px;
        cursor: pointer;

        width: 100%;

        margin: 20px 0;
      }

      button:hover {
        opacity: 0.9;
      }

      button:disabled {
        opacity: 0.4;

        cursor: not-allowed;
      }

      .input-group {
        position: relative;
      }

      @media (max-width: 600) {
        form {
          max-width: unset;
        }
      }
    `,
  ];
  constructor() {
    super();

    this.employee = {
      "First Name": {
        value: "",
        isValid: false,
        isTouched: false,
        validate: isEmpty,
      },
      "Last Name": {
        value: "",
        isValid: false,
        isTouched: false,
        validate: isEmpty,
      },
      "Date of Employment": {
        value: "",
        isValid: false,
        isTouched: false,
        validate: isValidDate,
      },
      "Date of Birth": {
        value: "",
        isValid: false,
        isTouched: false,
        validate: isValidBirthDate,
      },
      Phone: {
        value: "",
        isValid: false,
        isTouched: false,
        validate: isEmpty,
        mask: "{+(9\\0)} 000 000 00 00",
        maskObj: null,
        id: "phone",
      },
      Email: {
        value: "",
        isValid: false,
        isTouched: false,
        validate: isEmail,
      },
      Department: {
        value: "",
        isValid: false,
        isTouched: false,
        validate: isEmpty,
      },
      Position: {
        value: "",
        isValid: false,
        isTouched: false,
        validate: isEmpty,
      },
    };

    this.selectedId = "";
    this.showEditModal = null;
    this.isChanged = false;
  }

  fetchData() {
    const id = window.router.location.params.id;
    if (!id) return;

    const item = store.getState().data.find((el) => el._id === id);
    if (!item) return;

    this.selectedId = item._id;

    for (let key in item) {
      if (this.employee[key]) {
        this.employee[key].value = item[key];
        this.employee[key].isTouched = true;
        this.employee[key].isValid = this.employee[key].validate(item[key]);
      }
    }
  }

  applyMask() {
    for (let key in this.employee) {
      const item = this.employee[key];
      if (!!item.mask) {
        const element = this.shadowRoot.getElementById(item.id);
        if (element) {
          const mask = IMask(element, {
            mask: item.mask,
          });
          item.maskObj = mask;
        }
      }
    }
  }

  firstUpdated() {
    super.firstUpdated();

    this.fetchData();

    this.applyMask();

    this.requestUpdate();
  }

  handleSubmit(e, isFormValid) {
    e.preventDefault();

    if (!isFormValid) {
      console.log("invalid: ", this.employee);
      return;
    }

    const newItem = {};
    for (let key in this.employee) {
      const item = this.employee[key];
      newItem[key] = item.mask
        ? item.maskObj.unmaskedValue
        : this.employee[key].value;
    }

    newItem._id = this.selectedId || uuidv4();

    if (this.selectedId) {
      this.showEditModal = newItem;
      this.requestUpdate();
    } else {
      store.dispatch({
        type: "ADD_NEW",
        payload: newItem,
      });
      Router.go("/");
    }
  }

  handleEditConfirm() {
    store.dispatch({
      type: "EDIT_DATA",
      payload: this.showEditModal,
    });

    Router.go("/");
  }

  handleEditReject() {
    this.showEditModal = null;
    this.requestUpdate();
  }

  handleInputChange(event) {
    const { name, value } = event.target;

    let uptVal = value;

    const section = { ...this.employee[name] };
    section.value = uptVal;
    section.isValid = this.employee[name].validate(uptVal);
    section.isTouched = true;
    this.employee = {
      ...this.employee,
      [name]: section,
    };

    if (!!this.selectedId) {
      this.isChanged = true;
    }

    this.requestUpdate();
  }

  handleBlur(event) {
    const { name, value } = event.target;
    this.employee[name].isTouched = true;

    this.requestUpdate(); // Manually trigger reactivity to update the DOM
  }

  render() {
    let isFormValid = true;
    for (let el in this.employee) {
      isFormValid = isFormValid && this.employee[el].isValid;
    }

    if (!!this.selectedId) {
      isFormValid = isFormValid && this.isChanged;
    }

    if (!isFormValid) console.log(this.employee);

    let modal = null;
    if (!!this.showEditModal && !!this.selectedId) {
      modal = html`<dialog-modal
        .header=${t("Are you sure?")}
        .text=${t(`Your changes will be saved. Do you want to proceed?`)}
        .acceptButton=${t("Accept")}
        .rejectButton=${t("Reject")}
        .accept=${() => this.handleEditConfirm()}
        .reject=${() => this.handleEditReject()}
      ></dialog-modal>`;
    }

    return html`
      ${modal}
      <shared-container .header=${this.selectedId ? "Edit Record" : "Add New"}>
        <form novalidate @submit=${(e) => this.handleSubmit(e, isFormValid)}>
          ${FORM_DATA.map(
            (el) => html`
              <div class="input-group">
                <label for=${el.id}>${t(el.name)}:</label>
                <!-- @ts-ignore to bypass the type check -->
                <input
                  class=${this.employee[el.name].isTouched &&
                  !this.employee[el.name].isValid
                    ? "invalid"
                    : ""}
                  type=${el.type}
                  id=${el.id}
                  name=${el.name}
                  .value=${this.employee[el.name].value}
                  @input=${this.handleInputChange}
                  @blur=${this.handleBlur}
                  placeholder=${el.placeholder || ""}
                  maxlength=${el.maxLength}
                />
              </div>
            `
          )}
          ${FORM_DATA_SELECT.map(
            (el) => html`
              <div class="input-group">
                <label for=${el.id}>${t(el.name)}:</label>
                <select
                  name=${el.name}
                  id=${el.id}
                  class=${this.employee[el.name].isTouched &&
                  !this.employee[el.name].isValid
                    ? "invalid"
                    : ""}
                  @change=${(e) => this.handleInputChange(e, true)}
                >
                  ${el.options.map(
                    (val) => html`
                      <option
                        ?selected=${val === this.employee[el.name].value}
                        value=${val}
                      >
                        ${t(val)}
                      </option>
                    `
                  )}
                </select>
              </div>
            `
          )}
          <button type="submit" ?disabled=${!isFormValid}>
            ${t(this.selectedId ? "Save" : "Submit")}
          </button>
        </form>
      </shared-container>
    `;
  }
}

customElements.define("form-item", FormItem);

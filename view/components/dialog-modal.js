import { LitElement, html, css } from "lit";

class DialogModal extends LitElement {
  static styles = [
    css`
      /* Default modal background and dialog styles */
      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 9999;

        display: flex;
        justify-content: center;
        align-items: center;
      }

      dialog {
        background-color: white;
        border-radius: 5px;
        border: none;
        padding: 10px;
        width: 400px;
        max-width: 90%;
        margin: auto;

        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      }

      dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.5); /* Gray transparent background */
      }

      h2 {
        margin-top: 0;
        font-size: 21px;

        color: var(--main-color);
      }

      p {
        font-size: 13px;
      }

      form {
        margin-top: 10px;

        display: flex;
        flex-direction: column;
      }

      button {
        width: 100%;

        padding: 10px 15px;

        font-size: 14px;

        cursor: pointer;

        background-color: var(--main-color);
        color: white;
        border: none;

        border-radius: 4px;

        margin-bottom: 10px;
      }

      button:last-child {
        background-color: white;
        color: black;

        border: 1px gray solid;
      }

      button:hover {
        opacity: 0.9;
      }

      button:focus {
        outline: none;
      }
    `,
  ];

  static properties = {
    isOpen: { type: Boolean }, // Using camelCase to match properties
    header: { type: String },
    text: { type: String },
    acceptButton: { type: String },
    rejectButton: { type: String },
    accept: { type: Function }, // Function type for accept and reject
    reject: { type: Function },
  };

  constructor() {
    super();
    this.isOpen = true;
    this.header = "";
    this.text = "";
    this.acceptButton = "";
    this.rejectButton = "";
    this.accept = () => {}; // Default to no-op function
    this.reject = () => {}; // Default to no-op function
  }

  openDialog() {
    this.isOpen = true;
    this.requestUpdate();
  }

  closeDialog() {
    this.isOpen = false;
    if (!!this.reject) {
      this.reject();
    }
    this.requestUpdate();
  }

  acceptDialog() {
    this.isOpen = false;
    if (!!this.accept) {
      this.accept();
    }
    this.requestUpdate();
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.isOpen) {
      this.renderModal();
    }
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (this.isOpen) {
      this.renderModal();
    } else {
      const modalContainer = document.querySelector("#modal");
      if (modalContainer && modalContainer.contains(this)) {
        modalContainer.removeChild(this);
      }
    }
  }

  renderModal() {
    const modalContainer = document.querySelector("#modal");

    if (modalContainer && !modalContainer.contains(this)) {
      modalContainer.appendChild(this);
    }
  }

  render() {
    console.log("DIALOG:", this.header);
    return html`
      <div class="modal-overlay" ?hidden="${!this.isOpen}">
        <dialog ?open="${this.isOpen}">
          <h2>${this.header}</h2>
          <p>${this.text || "HEYY"}</p>
          <form method="dialog">
            ${this.acceptButton &&
            html`<button @click=${() => this.acceptDialog()}>
              ${this.acceptButton}
            </button>`}
            ${this.rejectButton &&
            html`<button @click=${() => this.closeDialog()}>
              ${this.rejectButton}
            </button>`}
          </form>
        </dialog>
      </div>
    `;
  }
}

customElements.define("dialog-modal", DialogModal);

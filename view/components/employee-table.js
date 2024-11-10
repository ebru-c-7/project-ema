import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";
import { v4 as uuidv4 } from "uuid";

import { store } from "../../util/store/index.js";
import { convertDate, formatPhoneNumber } from "../../util/index.js";
import { Router } from "@vaadin/router";
import "./dialog-modal.js";

class EmployeeTable extends LitElement {
  static properties = {
    // isGrid: { type: Boolean },
    mode: { type: String },
    data: { type: Array },
    selectedDelete: { type: Object },
  };

  static styles = [
    css`
      .container {
        background-color: white;

        display: block;

        width: 100%;
        height: calc(100vh - 164px - 3vh - 50px);

        border-radius: 5px;

        overflow: auto;
      }

      .tablewrapper {
      }

      table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
      }

      th,
      td {
        text-align: center;
        padding: 25px 8px;

        white-space: nowrap;

        font-size: 14px;
      }

      td {
        color: gray;
      }

      th {
        color: var(--main-color);
      }

      /* width */
      ::-webkit-scrollbar {
        width: 3px;
        height: 3px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: var(--main-color);
        border-radius: 5px;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: var(--main-color);
        cursor: grab;
      }

      .tablewrapper tbody > tr > td:nth-child(1),
      .tablewrapper thead > tr > th:nth-child(1),
      .tablewrapper tbody > tr > td:nth-child(2),
      .tablewrapper thead > tr > th:nth-child(2) {
        background-color: white;

        position: sticky;
      }

      .tablewrapper tbody > tr > td:nth-child(1),
      .tablewrapper tbody > tr > td:nth-child(2) {
        color: black;
      }

      .tablewrapper tbody > tr > td:nth-child(1),
      .tablewrapper thead > tr > th:nth-child(1) {
        left: 0;
      }

      .tablewrapper tbody > tr > td:nth-child(2),
      .tablewrapper thead > tr > th:nth-child(2) {
        left: 116px;
      }

      .tablewrapper thead > tr {
        position: sticky;
        top: 0;

        background-color: white;

        z-index: 100;
      }

      .tablewrapper thead > tr > th:first-child {
        min-width: 100px;
      }

      tbody tr {
        border-bottom: 2px #dcd7d78d solid;
      }

      table button,
      .gridwrapper button {
        background: transparent;
        border: none;

        cursor: pointer;
      }

      table button img,
      .gridwrapper button img {
        height: 17px;
      }

      .pages {
        background-color: var(--main-bg);

        display: flex;
        justify-content: center;
        align-items: center;

        height: 50px;
        padding: 10px;
      }

      .pages button {
        border: none;
        background: none;

        color: gray;

        width: 28px;
        height: 28px;

        margin: 2.5px;

        border-radius: 100%;

        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;
      }

      .pages .dots {
        color: gray;
      }

      .pages button.active,
      .pages button:hover {
        color: white;
        background-color: var(--main-color);
      }

      .pages button:disabled {
        display: none;
      }

      .pages svg {
        height: 15px;
        display: inline-block;
        width: 15px;
      }

      .pages svg path {
        fill: gray;
      }

      .pages button:hover path,
      .pages button:hover {
        fill: white;
        background-color: var(--main-color);
      }

      .gridwrapper {
        display: flex;

        flex-wrap: wrap;
      }

      .grid-item {
        min-width: calc(100% / 3 - 12px);
        max-width: calc(100% / 3 - 12px);

        text-align: center;

        border: 1px #dcd7d78d solid;

        padding: 10px 5px;
      }

      .grid-item > div {
        margin-bottom: 10px;
      }

      .grid-item div > span {
        color: gray;
      }
      .grid-item div > span:first-of-type {
        color: black;

        /* display: inline-block; */
        width: 120px;

        /* text-align: right; */
      }

      @media (max-width: 1000px) {
        .grid-item {
          min-width: calc(100% / 2 - 12px);
          max-width: calc(100% / 2 - 12px);
        }
      }

      @media (max-width: 700px) {
        .grid-item {
          min-width: calc(99% - 12px);
          max-width: calc(99% - 12px);
        }

        table button img,
        .gridwrapper button img {
          height: 22px;

          margin: 15px;
        }
      }
    `,
  ];

  page = {
    total: 1,
    current: 1,
    perPage: 7,
    buttons: 4,
    currData: [],
  };

  constructor() {
    super();
    this.data = store.getState().data;

    const searchParams = new URLSearchParams(window.location.search);
    this.page.current = +searchParams.get("page") || +this.page.current;

    // Subscribe to Redux store updates
    this.unsubscribe = store.subscribe(() => {
      const state = store.getState();
      this.data = state.data; // Update component property when Redux state changes
      this.page.total = Math.ceil(this.data.length / this.page.perPage);
    });
  }

  // Unsubscribe when the element is removed to prevent memory leaks
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.unsubscribe) this.unsubscribe();
  }

  updated(changedProperties) {
    if (changedProperties.has("mode")) {
      console.log("myState changed:", this.mode);
      this.page.perPage = this.mode == "galery" ? 12 : 7;
      if (!!this.data.length)
        this.page.total = Math.ceil(this.data.length / this.page.perPage);
      this.requestUpdate();
    }
  }

  handleEdit(e) {
    console.log(e);
    window.history.pushState(null, "", `/edit/${e._id}`);
    window.dispatchEvent(new Event("popstate"));
  }

  handleDelete(e) {
    console.log(e);
    this.selectedDelete = e;
    this.requestUpdate();
  }

  handleDeleteConfirm() {
    store.dispatch({
      type: "DELETE",
      payload: this.selectedDelete._id,
    });

    this.selectedDelete = null;
    this.requestUpdate();
  }

  handleDeleteReject() {
    this.selectedDelete = null;
    this.requestUpdate();
  }

  handlePageChange(page) {
    let uptPage = page;

    const params = new URLSearchParams(window.location.search);

    if (page < 1 || page > this.page.total) {
      uptPage = 1;
    }

    params.set("page", uptPage);

    const newUrl = `${window.router.location.pathname}?${params.toString()}`;
    Router.go(newUrl);

    this.page.current = +uptPage;
    this.requestUpdate();
  }

  getVisiblePages() {
    const { current, total, buttons } = this.page;
    const half = Math.floor(buttons / 2);
    const visiblePages = new Set();

    visiblePages.add(1);
    visiblePages.add(total);

    const start = Math.max(2, current - half);
    const end = Math.min(total - 1, current + half);

    for (let i = start; i <= end; i++) {
      visiblePages.add(i);
    }

    return Array.from(visiblePages).sort((a, b) => a - b);
  }

  renderPagination() {
    const pages = this.getVisiblePages();
    const result = [];

    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];

      // Add "..." if there's a gap between this page and the previous page
      if (i > 0 && page > pages[i - 1] + 1) {
        result.push(html`<span class="dots">...</span>`);
      }

      // Render the page button
      result.push(html`
        <button
          class=${this.page.current == page ? "active" : ""}
          @click=${() => this.handlePageChange(page)}
        >
          ${page}
        </button>
      `);
    }

    if (result.length > 1) {
      result.unshift(html`
        <button
          @click=${() => this.handlePageChange(this.page.current - 1)}
          ?disabled=${this.page.current === 1}
        >
          <svg
            width="800px"
            height="800px"
            viewBox="-5 0 24 24"
            style="height: 15px; display: inline-block; width: 15px;"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
          >
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
              sketch:type="MSPage"
            >
              <g
                id="Icon-Set"
                sketch:type="MSLayerGroup"
                transform="translate(-421.000000, -1195.000000)"
                fill="#000000"
              >
                <path
                  d="M423.429,1206.98 L434.686,1196.7 C435.079,1196.31 435.079,1195.67 434.686,1195.28 C434.293,1194.89 433.655,1194.89 433.263,1195.28 L421.282,1206.22 C421.073,1206.43 420.983,1206.71 420.998,1206.98 C420.983,1207.26 421.073,1207.54 421.282,1207.75 L433.263,1218.69 C433.655,1219.08 434.293,1219.08 434.686,1218.69 C435.079,1218.29 435.079,1217.66 434.686,1217.27 L423.429,1206.98"
                  id="chevron-left"
                  sketch:type="MSShapeGroup"
                ></path>
              </g>
            </g>
          </svg>
        </button>
      `);

      result.push(html`
        <button
          @click=${() => this.handlePageChange(this.page.current + 1)}
          ?disabled=${this.page.current === this.page.total}
        >
          <svg
            width="800px"
            height="800px"
            viewBox="-5 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
          >
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
              sketch:type="MSPage"
            >
              <g
                id="Icon-Set"
                sketch:type="MSLayerGroup"
                transform="translate(-473.000000, -1195.000000)"
                fill="#000000"
              >
                <path
                  d="M486.717,1206.22 L474.71,1195.28 C474.316,1194.89 473.678,1194.89 473.283,1195.28 C472.89,1195.67 472.89,1196.31 473.283,1196.7 L484.566,1206.98 L473.283,1217.27 C472.89,1217.66 472.89,1218.29 473.283,1218.69 C473.678,1219.08 474.316,1219.08 474.71,1218.69 L486.717,1207.75 C486.927,1207.54 487.017,1207.26 487.003,1206.98 C487.017,1206.71 486.927,1206.43 486.717,1206.22"
                  id="chevron-right"
                  sketch:type="MSShapeGroup"
                ></path>
              </g>
            </g>
          </svg>
        </button>
      `);
    }

    return result;
  }

  renderTableWrapper(currData) {
    let items = currData.map(
      (el, i) => html`
        <tr>
          <td>${el.index} ${el["First Name"]}</td>
          <td>${el["Last Name"]}</td>
          <td>${convertDate(el["Date of Employment"])}</td>
          <td>${convertDate(el["Date of Birth"])}</td>
          <td>${formatPhoneNumber(el["Phone"])}</td>
          <td>${el["Email"]}</td>
          <td>${el["Department"]}</td>
          <td>${el["Position"]}</td>
          <td>
            <button
              title="Edit"
              @click=${function () {
                this.handleEdit(el);
              }}
            >
              <img src=${"/assets/img/edit.svg"} alt="edit" />
            </button>
            <button
              title="Delete"
              @click=${function () {
                this.handleDelete(el);
              }}
            >
              <img src=${"/assets/img/delete.svg"} alt="delete" />
            </button>
          </td>
        </tr>
      `
    );

    return html`
      <div class="tablewrapper">
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date of Employment</th>
              <th>Date of Birth</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Department</th>
              <th>Position</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${items}
          </tbody>
        </table>
      </div>
    `;
  }

  renderGridWrapper(currData) {
    let gridItems = currData.map((el) => {
      return html`<div class="grid-item">
        <h4>${el.index} ${el["First Name"]} ${el["Last Name"]}</h4>
        <div>
          <span>Date of Employment: </span>
          <span>${convertDate(el["Date of Employment"])}</span>
        </div>
        <div>
          <span>Date of Birth: </span>
          <span>${convertDate(el["Date of Birth"])}</span>
        </div>
        <div>
          <span>Phone: </span>
          <span>${formatPhoneNumber(el["Phone"])}</span>
        </div>
        <div>
          <span>Email: </span>
          <span>${el["Email"]}</span>
        </div>
        <div>
          <span>Department: </span>
          <span>${el["Department"]}</span>
        </div>
        <div>
          <span>Position: </span>
          <span>${el["Position"]}</span>
        </div>

        <div>
          <button
            title="Edit"
            @click=${function () {
              this.handleEdit(el);
            }}
          >
            <img src=${"/assets/img/edit.svg"} alt="edit" />
          </button>
          <button
            title="Delete"
            @click=${function () {
              this.handleDelete(el);
            }}
          >
            <img src=${"/assets/img/delete.svg"} alt="delete" />
          </button>
        </div>
      </div>`;
    });
    return html` <div class="gridwrapper">${gridItems}</div> `;
  }

  render() {
    const lastItem = (this.page.current - 1) * this.page.perPage;
    const currData = this.data.slice(lastItem, lastItem + this.page.perPage);

    let content =
      this.mode === "table" || !this.mode
        ? this.renderTableWrapper(currData)
        : this.renderGridWrapper(currData);
    let modal = null;

    if (!!this.selectedDelete) {
      console.log("selectedDelete: ", this.selectedDelete);
      const name = `${this.selectedDelete["First Name"]} ${this.selectedDelete["Last Name"]}`;
      modal = html`<dialog-modal
        .header=${"Are you sure?"}
        .text=${`Selected employee record of ${name} will be deleted.`}
        .acceptButton=${"Accept"}
        .rejectButton=${"Reject"}
        .accept=${() => this.handleDeleteConfirm()}
        .reject=${() => this.handleDeleteReject()}
      ></dialog-modal>`;
    }

    return html`
      ${modal}
      <div class="container">${content}</div>
      <div class="pages">${this.renderPagination()}</div>
    `;
  }
}

customElements.define("employee-table", EmployeeTable);

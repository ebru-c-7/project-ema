import { LitElement, html, css } from "lit";
import { translate as t } from "lit-i18n";

import "./components/employee-table.js";
import { Router } from "@vaadin/router";

const viewOptions = ["table", "galery"];

class EmployeeList extends LitElement {
  static properties = {
    mode: { type: String },
  };

  constructor() {
    super();
    this.mode = this.getMode();
  }

  static styles = [
    css`
      header {
        color: var(--main-color);

        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      header h1 {
        font-size: 25px;
      }

      .view {
        display: flex;
        column-gap: 10px;
      }

      .view button {
        border: none;

        background-color: transparent;

        cursor: pointer;

        padding: 8px 10px;
        border-radius: 100%;
      }

      .view svg {
        height: 15px;
        display: inline-block;
        width: 15px;
      }

      .view svg path {
        fill: var(--main-color);
      }

      .view button:hover path,
      .view button:hover {
        fill: white;
        background-color: var(--main-color);
      }
    `,
  ];

  getMode() {
    const currMode = this.handleModeChange() || viewOptions[0];
    return currMode;
  }

  handleModeChange(mode) {
    let uptMode = mode;

    const params = new URLSearchParams(window.location.search);
    if (!uptMode) {
      return params.get("mode");
    }

    if (!viewOptions.includes(uptMode)) {
      uptMode = viewOptions[0];
    }

    params.set("mode", uptMode);
    const newUrl = `${window.router.location.pathname}?${params.toString()}`;
    Router.go(newUrl);

    this.mode = uptMode;
    this.requestUpdate();
  }

  renderGridIcon() {
    return html` <svg
      width="800px"
      height="800px"
      viewBox="0 0 52 52"
      data-name="Layer 1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14,16H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H14a2,2,0,0,1,2,2V14A2,2,0,0,1,14,16ZM4,12h8V4H4Z"
      />
      <path
        d="M14,34H2a2,2,0,0,1-2-2V20a2,2,0,0,1,2-2H14a2,2,0,0,1,2,2V32A2,2,0,0,1,14,34ZM4,30h8V22H4Z"
      />
      <path
        d="M14,52H2a2,2,0,0,1-2-2V38a2,2,0,0,1,2-2H14a2,2,0,0,1,2,2V50A2,2,0,0,1,14,52ZM4,48h8V40H4Z"
      />
      <path
        d="M32,16H20a2,2,0,0,1-2-2V2a2,2,0,0,1,2-2H32a2,2,0,0,1,2,2V14A2,2,0,0,1,32,16ZM22,12h8V4H22Z"
      />
      <path
        d="M32,34H20a2,2,0,0,1-2-2V20a2,2,0,0,1,2-2H32a2,2,0,0,1,2,2V32A2,2,0,0,1,32,34ZM22,30h8V22H22Z"
      />
      <path
        d="M32,52H20a2,2,0,0,1-2-2V38a2,2,0,0,1,2-2H32a2,2,0,0,1,2,2V50A2,2,0,0,1,32,52ZM22,48h8V40H22Z"
      />
      <path
        d="M50,16H38a2,2,0,0,1-2-2V2a2,2,0,0,1,2-2H50a2,2,0,0,1,2,2V14A2,2,0,0,1,50,16ZM40,12h8V4H40Z"
      />
      <path
        d="M50,34H38a2,2,0,0,1-2-2V20a2,2,0,0,1,2-2H50a2,2,0,0,1,2,2V32A2,2,0,0,1,50,34ZM40,30h8V22H40Z"
      />
      <path
        d="M50,52H38a2,2,0,0,1-2-2V38a2,2,0,0,1,2-2H50a2,2,0,0,1,2,2V50A2,2,0,0,1,50,52ZM40,48h8V40H40Z"
      />
    </svg>`;
  }

  renderTableIcon() {
    return html`
      <svg
        width="800px"
        height="800px"
        viewBox="0 -1 20 20"
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
            transform="translate(-210.000000, -887.000000)"
          >
            <path
              d="M229,895 L211,895 C210.448,895 210,895.448 210,896 C210,896.553 210.448,897 211,897 L229,897 C229.552,897 230,896.553 230,896 C230,895.448 229.552,895 229,895 L229,895 Z M229,903 L211,903 C210.448,903 210,903.448 210,904 C210,904.553 210.448,905 211,905 L229,905 C229.552,905 230,904.553 230,904 C230,903.448 229.552,903 229,903 L229,903 Z M211,889 L229,889 C229.552,889 230,888.553 230,888 C230,887.448 229.552,887 229,887 L211,887 C210.448,887 210,887.448 210,888 C210,888.553 210.448,889 211,889 L211,889 Z"
              id="hamburger"
              sketch:type="MSShapeGroup"
            ></path>
          </g>
        </g>
      </svg>
    `;
  }

  render() {
    console.log("render:", this.mode);
    return html` <div>
      <header class="heading">
        <h1>${t("Employee List")}</h1>
        <div class="view">
          <button @click=${() => this.handleModeChange(viewOptions[0])}>
            ${this.renderTableIcon()}
          </button>
          <button @click=${() => this.handleModeChange(viewOptions[1])}>
            ${this.renderGridIcon()}
          </button>
        </div>
      </header>
      <employee-table mode=${this.mode}></employee-table>
    </div>`;
  }
}

customElements.define("employee-list", EmployeeList);

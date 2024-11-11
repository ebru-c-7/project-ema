import { LitElement, html, css } from "lit";
import { translate as t } from "lit-i18n";

class Container extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = [
    css`
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

      header {
        color: var(--main-color);

        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      header h1 {
        font-size: 25px;
      }

      .container {
        background-color: white;

        padding: 20px 0;

        display: block;

        width: 100%;
        height: calc(100vh - 164px - 3vh - 90px);
        height: calc(100dvh - 164px - 3dvh - 90px);

        border-radius: 5px;

        overflow: auto;

        display: flex;
        justify-content: center;
        align-items: flex-start;

        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
    `,
  ];

  constructor() {
    super();
    // Initialize the employee object directly in the constructor
    this.header = "";
  }

  render() {
    return html` <div>
      <header class="heading">
        <h1>${t(this.header)}</h1>
      </header>
      <div class="container">
        <slot></slot>
      </div>
    </div>`;
  }
}

customElements.define("shared-container", Container);

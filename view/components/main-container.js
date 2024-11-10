import { LitElement, html, css } from "lit";

import "./nav-bar.js";

class MainContainer extends LitElement {
  static styles = [
    css`
      :host {
        padding: 3vh 5vw;

        background-color: var(--main-bg);

        display: block;
        height: 94vh;

        overflow-y: hidden;
      }
    `,
  ];

  render() {
    return html` <div>
      <nav-bar></nav-bar>
      <slot></slot>
    </div>`;
  }
}

customElements.define("main-container", MainContainer);

import { html, css } from "lit";
import { Router } from "@vaadin/router";

import { BaseComponent } from "./util/store/base-component.js";
import { store } from "./util/store/index.js";
import { defaultLang, initializeLang } from "./util/localization/index.js";

import "./view/employee-list.js";
import "./view/form-item.js";

import "./view/components/main-container.js";

export class MainIndex extends BaseComponent {
  firstUpdated() {
    super.firstUpdated();

    this.setRoutes();

    const data = store.getState().data;
    if (!data || !data.length) this.loadData();

    initializeLang(defaultLang);
  }

  async setRoutes() {
    const router = new Router(this.shadowRoot.querySelector("#outlet"));
    await router.setRoutes([
      { path: "/", component: "employee-list" },
      { path: "/add-new", component: "form-item" },
      { path: "/edit/:id", component: "form-item" },
      { path: "(.*)", redirect: "/" },
    ]);

    store.dispatch({
      type: "SET_ROUTER",
      payload: router,
    });
  }

  loadData() {
    fetch("/assets/data/employees.json")
      .then((res) => res.json())
      .then((empData) => {
        store.dispatch({
          type: "INITIAL",
          payload: empData,
        });
      });
  }

  render() {
    return html`
      <main>
        <main-container>
          <div id="outlet"></div>
        </main-container>
      </main>
    `;
  }
}

customElements.define("main-index", MainIndex);

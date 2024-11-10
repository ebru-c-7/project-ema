// main-index.js

import { LitElement, html, css } from "lit";
import { Router } from "@vaadin/router";

import { BaseComponent } from "./util/store/base-component.js";
import { store } from "./util/store/index.js";

import "./view/employee-list.js";
import "./view/add-new.js";
import "./view/edit-item.js";

import "./view/components/main-container.js";

class LitRealWorldIndex extends BaseComponent {
  firstUpdated() {
    super.firstUpdated();
    console.log("firstUpdated");
    const data = store.getState().data;
    if (!data || !data.length) this.loadData();

    const router = new Router(this.shadowRoot.querySelector("#outlet"));
    router.setRoutes([
      { path: "/", component: "employee-list" },
      { path: "/add-new", component: "add-new" },
      { path: "/edit/:id", component: "edit-item" },
      { path: "(.*)", redirect: "/" },
    ]);

    window.router = router;
  }

  loadData() {
    console.log("loadData");
    fetch("/assets/data/employees.json")
      .then((res) => res.json())
      .then((empData) => {
        console.log("empData:", empData);
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

customElements.define("main-index", LitRealWorldIndex);

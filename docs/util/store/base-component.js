import { LitElement } from "lit";

import { store } from "./index.js";

export class BaseComponent extends LitElement {
  constructor() {
    super();
    this.unsubscribe = store.subscribe(() => {
      this.stateUpdated();
    });
  }

  stateUpdated() {
    // Override in child classes to handle state updates
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.unsubscribe) this.unsubscribe();
  }
}

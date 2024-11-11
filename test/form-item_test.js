import { fixture, html, assert } from "@open-wc/testing";

import { FormItem } from "../view/form-item.js";

suite("form-item", () => {
  test("is defined", () => {
    const el = document.createElement("form-item");
    assert.instanceOf(el, FormItem);
  });
});

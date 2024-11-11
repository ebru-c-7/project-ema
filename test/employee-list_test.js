import { fixture, html, assert } from "@open-wc/testing";
import { EmployeeList } from "../view/employee-list.js";

suite("employee-list", () => {
  let el;

  test("is defined", () => {
    const el = document.createElement("employee-list");
    assert.instanceOf(el, EmployeeList);
  });

  test('sets initial mode based on URL query parameters or defaults to "table"', async () => {
    window.history.pushState({}, "", "/?mode=table");

    el = await fixture(html`<employee-list></employee-list>`);
    await el.updateComplete;

    assert.equal(el.mode, "table", 'Initial mode should be "table"');
  });
});

import i18next from "i18next";
import { fixture, assert } from "@open-wc/testing";
import { html } from "lit/static-html.js";
import sinon from "sinon";
import { MainIndex } from "../main-index.js";
import { store } from "../util/store/index.js";
import { initializeLang, LANGS } from "../util/localization/index.js";

suite("main-index", () => {
  let el;

  test("is defined", () => {
    el = document.createElement("main-index");
    assert.instanceOf(el, MainIndex);
  });

  test("renders with main-container and outlet", async () => {
    el = await fixture(html`<main-index></main-index>`);
    assert.shadowDom.equal(
      el,
      `
      <main>
        <main-container>
          <div id="outlet"></div>
        </main-container>
      </main>
      `
    );
  });

  test("sets up the router with correct routes", async () => {
    el = await fixture(html`<main-index></main-index>`);
    await el.updateComplete;

    await el.setRoutes();

    const router = store.getState().router;

    assert.isDefined(router, "Router should be defined");

    const routes = router.location.routes;
    assert.isArray(routes, "Router routes should be an array");
    const mainRoute = routes.find((route) => route.path === "/");
    assert.isDefined(mainRoute, 'Route for path "/" should be defined');
    assert.equal(
      mainRoute.component,
      "employee-list",
      'Main route should use "employee-list" component'
    );
  });

  test("loads the correct language", async () => {
    el = await fixture(html`<main-index></main-index>`);
    await el.updateComplete;

    await el.firstUpdated();

    await initializeLang();

    const languages = i18next.options.supportedLngs;

    assert.isArray(languages, "Languages are loaded");

    for (let lang of LANGS) {
      assert.isTrue(languages.includes(lang), `Language ${lang} included.`);
    }
  });

  test("fetches employee data when loadData is called", async () => {
    el = await fixture(html`<main-index></main-index>`);
    const fetchStub = sinon.stub(window, "fetch").resolves({
      json: () =>
        Promise.resolve([
          {
            "First Name": "Suphi",
            "Last Name": "İnönü",
            "Date of Employment": "2022-10-05",
            "Date of Birth": "1964-08-19",
            Phone: "+(90)5300000000",
            Email: "suphi_i̇nönü@test.com",
            Department: "Tech",
            Position: "Junior",
            _id: "ea24a6bf-9f99-4b5b-af76-4dea69b00de5",
          },
        ]),
    });

    store.getState = () => ({ data: [] });

    await el.loadData();

    assert.isTrue(fetchStub.calledOnceWith("/assets/data/employees.json"));

    fetchStub.restore();
  });
});

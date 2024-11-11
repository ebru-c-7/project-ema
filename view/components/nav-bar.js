import { LitElement, html, css } from "lit";
import { translate as t } from "lit-i18n";
import i18next from "i18next";
import { LANGS } from "../../util/localization";
import { store } from "../../util/store";
import { NAVBAR_LINKS } from "../../util";

class Navbar extends LitElement {
  static styles = [
    css`
      :host {
        background-color: white;

        display: block;

        padding: 10px 10px;

        border-radius: 5px;

        width: 100%;
      }

      nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .logo {
        text-decoration: none;

        display: flex;
        align-items: center;

        color: black;
      }

      .logo span {
        font-weight: bold;
        font-size: 18px;
      }

      .logo img {
        width: 25px;
        height: 25px;

        margin-right: 10px;
      }

      ul {
        list-style: none;

        display: flex;
        align-items: center;

        column-gap: 10px;
      }

      ul a {
        text-decoration: none;

        color: var(--main-color);
      }

      a.active {
        font-weight: bold;
      }

      select {
        -webkit-appearance: none;
        -moz-appearance: none;

        appearance: none;
        padding: 8px 12px;
        border-radius: 5px;
        border: 1px solid #ccc;
        background-color: white;

        color: #333;

        font-size: 14px;
        cursor: pointer;
        outline: none;
      }

      select:hover,
      select:focus {
        background-color: var(--main-color-lg);
        color: white;

        box-shadow: 0px 0px 5px rgba(0, 123, 255, 0.2);
      }

      select option {
        padding: 10px;
        font-size: 14px;

        background-color: white;

        color: gray;
      }

      select option:hover,
      select option:focus {
        background-color: var(--main-color);
        color: white;

        cursor: pointer;
      }
    `,
  ];

  constructor() {
    super();
    window.addEventListener("popstate", () => {
      console.log("popstate");
      const router = store.getState().router;

      this.currentPath = router.location.pathname;
      this.requestUpdate();
    });
  }

  changeLang(e) {
    const lang = e.target.value.toLowerCase();
    i18next.changeLanguage(lang);
  }

  render() {
    return html` <nav>
      <a class="logo" href="/">
        <img src=${"/assets/img/favicon.png"} alt="logo" />
        <span>ING</span>
      </a>

      <ul>
        ${NAVBAR_LINKS.map((el) => {
          return html`
            <li>
              <a
                class=${el.to === (this.currentPath || "/")
                  ? "active"
                  : "inactive"}
                href=${el.to}
                >${t(el.title)}</a
              >
            </li>
          `;
        })}

        <li>
          <select @change=${(e) => this.changeLang(e)}>
            ${LANGS.map(
              (el) => html`<
                <option ?selected=${i18next.language === el} value=${el}>
                  ${el.toUpperCase()}
                </option> `
            )}
          </select>
        </li>
      </ul>
    </nav>`;
  }
}

customElements.define("nav-bar", Navbar);

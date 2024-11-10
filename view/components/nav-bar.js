import { LitElement, html, css } from "lit";

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
        column-gap: 10px;
      }

      ul a {
        text-decoration: none;

        color: var(--main-color);
      }

      select {
        -webkit-appearance: none;
        -moz-appearance: none;
        text-indent: 1px;
        text-overflow: "";

        padding: 0 10px;

        border: none;
        outline: none;
      }

      select:focus {
        border: none;
      }
    `,
  ];

  render() {
    return html` <nav>
      <a class="logo" href="/">
        <img src=${"/assets/img/favicon.png"} alt="logo" />
        <span>ING</span>
      </a>

      <ul>
        <li>
          <a href="/">Employees</a>
        </li>
        <li>
          <a href="/add-new">Add New</a>
        </li>

        <li>
          <select>
            <option value="EN">EN</option>
            <option value="TR">TR</option>
          </select>
        </li>
      </ul>
    </nav>`;
  }
}

customElements.define("nav-bar", Navbar);

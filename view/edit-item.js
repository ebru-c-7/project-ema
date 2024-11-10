import { LitElement, html, css } from "lit";

class EditItem extends LitElement {
  static styles = [css``];
  data = null;

  connectedCallback() {
    super.connectedCallback();
    // this.loadData();
  }

  // async loadData() {
  //   try {
  //     const id = window.router.location.params.id;
  //     if (!id) return;
  //     const item = await getOne(id);
  //     if (!item) return;

  //     this.data = item;
  //     this.requestUpdate(); // Trigger re-render after loading data
  //   } catch (error) {
  //     console.error("Error loading JSON data:", error);
  //   }
  // }

  render() {
    if (!!this.data) {
      return html` <p>${this.data["First Name"]}</p> `;
    }

    return html` <div>EditItem</div> `;
  }
}

customElements.define("edit-item", EditItem);

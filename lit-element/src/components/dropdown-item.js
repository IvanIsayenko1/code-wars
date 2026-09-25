import { LitElement, css, html } from "lit";

export class DropdownItem extends LitElement {
  static properties = {
    label: { type: String },
    value: { type: String },
    active: { type: Boolean },
  };

  static styles = css`
    div {
      padding-inline: 0.5rem;
      padding-block: 0.5rem;
    }

    div:hover {
      cursor: pointer;
      font-weight: bold;
    }

    div[active] {
      font-weight: bold;
    }
  `;

  _handleClick = () => {
    this.dispatchEvent(
      new CustomEvent("select", {
        detail: this.value,
      }),
    );
  };

  render() {
    return html`<div @click=${this._handleClick} ?active=${this.active}>
      ${this.label}
    </div>`;
  }
}
customElements.define("dropdown-item", DropdownItem);

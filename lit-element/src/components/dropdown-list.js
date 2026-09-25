import { css, html, LitElement } from "lit";
import { map } from "lit/directives/map.js";
import "./dropdown-item.js";

export class DropdownList extends LitElement {
  static properties = {
    users: { attribute: false, type: Array },
    selectedUser: {
      attribute: false,
      type: Number,
    },
    activeIndex: {
      attribute: false,
      type: Number,
    },
  };

  static styles = css`
    div {
      border: 1px solid;
    }
  `;

  constructor() {
    super();
    this.users = [];
    this.selectedUser = 0;
    this.activeIndex = -1;
  }

  _handleSelect(e) {
    this.selectedUser = e.detail;
    this.dispatchEvent(new CustomEvent("select", { detail: e.detail }));
  }

  render() {
    return html`<div>
      ${
        this.users.length
          ? map(
              this.users,
              (user, index) => html`
                <dropdown-item
                  label="${user.name}"
                  value="${user.id}"
                  @select="${this._handleSelect}"
                  ?active=${this.activeIndex === index}
                ></dropdown-item>
              `,
            )
          : html`<p>No users found.</p>`
      }
    </div>`;
  }
}

customElements.define("dropdown-list", DropdownList);

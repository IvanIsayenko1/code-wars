import { html, LitElement } from "lit";
import "./dropdown-input.js";
import "./dropdown-list.js";
import { users } from "../mocks/users.js";

/**
 * @extends {LitElement}
 */
export class UserSearch extends LitElement {
  static properties = {
    // props
    users: { attribute: false, type: Array },
    selectedUser: { attribute: false, type: Number },
    placeholder: { type: String },
    disabled: { attribute: false, type: Boolean },

    // state
    isFocused: { type: Boolean, state: true },
    value: { type: String, state: true },
    activeIndex: { type: Number, state: true },
  };

  constructor() {
    super();
    this.placeholder = "Search...";
    this.isFocused = false;
    this.users = users;
    this.value = "";
    this.activeIndex = -1;
  }

  _getFilteredUsers = () => {
    return this.users.filter((u) =>
      u.name.toLowerCase().includes(this.value.toLowerCase()),
    );
  };

  _focusHandler = (isFocused) => {
    this.isFocused = isFocused;
  };

  _changeHandler = (e) => {
    this.value = e.detail.search;
    this.activeIndex = -1;
  };

  _selectHandler = (e) => {
    this.value = this.users.find((user) => user.id == e.detail).name;
    this.isFocused = false;

    this.renderRoot.querySelector("dropdown-input")?.blurInput();

    this.dispatchEvent(
      new CustomEvent("user-selected", {
        detail: { id: e.detail, name: this.value },
      }),
    );
  };

  _handleKeydown = (event) => {
    const users = this._getFilteredUsers();
    if (!users.length) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      this.activeIndex = (this.activeIndex + 1) % users.length;
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      this.activeIndex =
        this.activeIndex <= 0 ? users.length - 1 : this.activeIndex - 1;
    } else if (event.key === "Enter" && this.activeIndex >= 0) {
      event.preventDefault();
      this._selectHandler({ detail: users[this.activeIndex].id });
    } else if (event.key === "Escape") {
      this.isFocused = false;
    }
  };

  render() {
    return html`${this._renderInputTemplate()} ${this._renderListTemplate()}`;
  }

  _renderInputTemplate = () => {
    return html`
      <dropdown-input
        .value=${this.value}
        placeholder=${this.placeholder}
        ?disabled=${this.disabled}
        @focus=${() => this._focusHandler(true)}
        @blur=${() => this._focusHandler(false)}
        @input-custom=${(e) => this._changeHandler(e)}
        @keydown=${this._handleKeydown}
      ></dropdown-input>
    `;
  };

  _renderListTemplate = () => {
    const filteredUsers = this._getFilteredUsers();

    return this.isFocused
      ? html`
          <dropdown-list
            .users=${filteredUsers}
            .selected-user=${this.selectedUser}
            .activeIndex=${this.activeIndex}
            @select=${(e) => this._selectHandler(e)}
            @mousedown=${(e) => e.preventDefault()}
            @mouseover=${(e) => {
              this.activeIndex = -1;
            }}
          ></dropdown-list>
        `
      : null;
  };
}

window.customElements.define("user-search", UserSearch);

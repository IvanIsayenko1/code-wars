import { css, html, LitElement } from "lit";
import "../assets/close-icon.js";

export class DropdownInput extends LitElement {
  static properties = {
    placeholder: { type: String },
    value: { type: String },
    disabled: { type: Boolean },
  };

  static styles = css`
    div {
      position: relative;
    }

    span {
      position: absolute;
      right: 3px;
      top: 3px;
    }

    span:hover {
      cursor: pointer;
    }
  `;

  constructor() {
    super();
    this.value = "";
  }

  updated(changedProperties) {
    if (changedProperties.has("value")) {
      this.dispatchEvent(
        new CustomEvent("input-custom", {
          detail: {
            search: this.value,
          },
        }),
      );
    }
  }

  blurInput() {
    this.renderRoot.querySelector("input")?.blur();
  }

  _focusHandler = () => {
    this.dispatchEvent(
      new CustomEvent("focus", { bubbles: true, composed: true }),
    );
  };

  _blurHandler = () => {
    this.dispatchEvent(
      new CustomEvent("blur", { bubbles: true, composed: true }),
    );
  };

  _inputHandler = (e) => {
    this.value = e.target.value;
  };

  _cleanHandler = () => {
    this.value = "";
  };

  render() {
    return html`
      <div>
        <input
          .value=${this.value}
          placeholder=${this.placeholder}
          @click=${this._focusHandler}
          @blur=${this._blurHandler}
          @input=${this._inputHandler}
          ?disabled=${this.disabled}
        />
        ${
          this.value
            ? html`
                <span
                  @click=${this._cleanHandler}
                  @mousedown=${(e) => e.preventDefault()}
                >
                  <close-icon></close-icon>
                </span>
              `
            : null
        }
      </div>
    `;
  }
}

window.customElements.define("dropdown-input", DropdownInput);

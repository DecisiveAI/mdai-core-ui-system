import "@material/web/button/filled-button.js";
import "@material/web/button/outlined-button.js";
import "@material/web/button/text-button.js";
import "@material/web/iconbutton/filled-icon-button.js";
import "@material/web/iconbutton/filled-tonal-icon-button.js";
import "@material/web/iconbutton/icon-button.js";
import "@material/web/iconbutton/outlined-icon-button.js";
import "@material/web/iconbutton/filled-icon-button.js";
import { html, LitElement } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

const BUTTON_VARIANT = {
  OUTLINED: "outlined",
  FILLED: "filled",
  TEXT: "text",
};

/**
 * MyDecisive button
 * @slot - This element has a slot, which should contain the button label
 */
export class MdaiButton extends LitElement {
  static properties = {
    variant: { type: String },
    icon: { type: String },
    iconOnly: { type: Boolean },
    analyticsId: { type: String },
    href: { type: String },
    newTab: { type: Boolean },
  };

  constructor() {
    super();
    /**
     * Button variant, one of outlined, filled or text. Default: text
     * @type {string=}
     */
    this.variant = undefined;
    /**
     * Button icon-type string, from https://fonts.google.com/icons, expects name in snake-case, like "account_tree". If left empty, no icon is rendered. Default: null, no icon
     * @type {string=}
     */
    this.icon = undefined;
    /**
     * @type {boolean=}
     */
    this.iconOnly = undefined;
    /**
     * @type {string=}
     */
    this.analyticsId = undefined;
    /**
     * Destination address for link buttons
     * @type {string=}
     */
    this.href = undefined;
    /**
     * If using the href attribute, open that link in a new tab
     * @type {boolean=}
     */
    this.newTab = undefined;
  }

  _onClick() {
    try {
      if (typeof ((window || {})._mdai_analytics || {}).track === "function") {
        let buttonLabel;
        const slot = this.shadowRoot.querySelector("slot");
        if (slot) {
          const elements = slot.assignedNodes({ flatten: true });
          buttonLabel = elements[0].textContent;
        }
        const buttonId = this.analyticsId || buttonLabel || this.icon;
        window._mdai_analytics.track(
          "mdai-button-click",
          buttonId ? { buttonId } : {}
        );
      }
    } catch (error) {
      console.warn("Unable to emit analytics event due to error: " + error);
    }
  }

  render() {
    const linkTarget = this.href && this.newTab ? "_blank" : undefined;
    // TODO: Figure out how to DRY this up in a way that's lit friendly
    if (this.iconOnly) {
      const icon = this.icon || "family_star";
      switch (this.variant) {
        case BUTTON_VARIANT.FILLED:
          return html`<md-filled-icon-button
            @click="${this._onClick}"
            href="${ifDefined(this.href)}"
            target="${ifDefined(linkTarget)}"
            ><md-icon>${icon}</md-icon></md-filled-icon-button
          >`;
        case BUTTON_VARIANT.OUTLINED:
          return html`<md-outlined-icon-button
            @click="${this._onClick}"
            href="${ifDefined(this.href)}"
            target="${ifDefined(linkTarget)}"
            ><md-icon>${icon}</md-icon></md-outlined-icon-button
          >`;
        default:
          return html`<md-icon-button
            @click="${this._onClick}"
            href="${ifDefined(this.href)}"
            target="${ifDefined(linkTarget)}"
            ><md-icon>${icon}</md-icon></md-icon-button
          >`;
      }
    }

    const iconTag = this.icon
      ? html`<md-icon slot="icon">${this.icon}</md-icon>`
      : "";

    switch (this.variant) {
      case BUTTON_VARIANT.FILLED:
        return html`<md-filled-button
          @click="${this._onClick}"
          href="${ifDefined(this.href)}"
          target="${ifDefined(linkTarget)}"
          ?hasicon=${!!this.icon}
          >${iconTag}<slot></slot
        ></md-filled-button>`;
      case BUTTON_VARIANT.OUTLINED:
        return html`<md-outlined-button
          @click="${this._onClick}"
          href="${ifDefined(this.href)}"
          target="${ifDefined(linkTarget)}"
          ?hasicon=${!!this.icon}
          >${iconTag}<slot></slot
        ></md-outlined-button>`;
      case BUTTON_VARIANT.TEXT:
      default:
        return html`<md-text-button
          @click="${this._onClick}"
          href="${ifDefined(this.href)}"
          target="${ifDefined(linkTarget)}"
          ?hasicon=${!!this.icon}
          >${iconTag}<slot></slot
        ></md-text-button>`;
    }
  }
}

customElements.define("mdai-button", MdaiButton);

import { LitElement, html } from 'lit-element';

export class BLSizedBox extends LitElement {
  static get properties() {
    return {
      width: { type: Number },
      height: { type: Number },
      showSize: { type: Boolean }
    };
  }

  render() {
    return html`
      <style>
        :host {
          display: block;
          color: var(--bl-color-secondary);
        }

        .box {
          width: ${this.width}px;
          height: ${this.height}px;
          background: var(--bl-color-background);

          border-width: 1px;
          border-style: solid;
          border-image: var(--bl-gradient-secondary);
          border-image-slice: 1;
        }
      </style>

      <div class="box">
        <slot />
      </div>
    `;
  }
}

customElements.define('bl-sized-box', BLSizedBox);


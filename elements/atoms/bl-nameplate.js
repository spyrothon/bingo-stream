import { LitElement, html } from 'lit-element';

export class BLNameplate extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      color: { type: String }
    };
  }

  render() {
    return html`
      <style>
        :host {
          display: block;
          color: var(--bl-color-secondary);
        }

        .nameplate {
          /* Sizing */
          position: relative;
          width: 230px;
          text-align: center;

          /* Border gradient */
          border-width: 1px;
          border-style: solid;
          border-image: var(--bl-gradient-secondary);
          border-image-slice: 1;

          /* Glow */
          box-shadow: var(--bl-inset-shadow-secondary);

          /* Text appearance */
          font-size: 18px;
          font-weight: 300;
          letter-spacing: 0.07em;
          text-shadow: var(--bl-shadow-tight);
        }

        .text {
          display: block;
          margin: auto;
          padding: 8px 4px;
          z-index: 10;
          background-color: ${this.color};
        }

        .background {
          opacity: 0.4;
        }
      </style>

      <div class="nameplate">
        <span class="background"></span>
        <span class="text">${this.name}</span>
      </div>
    `;
  }
}

customElements.define('bl-nameplate', BLNameplate);


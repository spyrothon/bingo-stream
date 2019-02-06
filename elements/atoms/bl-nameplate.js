import { LitElement, html } from 'lit-element';

class BLNameplate extends LitElement {
  static get properties() {
    return {
      name: { type: String }
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
          padding: 0.50em;
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
          text-shadow: var(--bl-shadow-secondary);
        }
      </style>

      <div class="nameplate">
        ${this.name}
      </div>
    `;
  }
}

customElements.define('bl-nameplate', BLNameplate);


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
          width: 320px;
          padding: 0.50em;
          margin: 4px;
          text-align: center;

          /* Border gradient */
          border-width: 1px;
          border-style: solid;
          border-image: var(--bl-gradient-secondary);
          border-image-slice: 1;

          /* Glow */
          box-shadow: var(--bl-inset-shadow-secondary);

          /* Text appearance */
          text-transform: uppercase;
          font-size: 22px;
          font-weight: 300;
          letter-spacing: 0.13em;
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


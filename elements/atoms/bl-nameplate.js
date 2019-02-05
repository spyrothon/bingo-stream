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
      </style>

      <p>Runner: ${this.name}</p>
    `;
  }
}

customElements.define('bl-nameplate', BLNameplate);


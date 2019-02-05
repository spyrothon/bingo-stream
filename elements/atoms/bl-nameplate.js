// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class BLNameplate extends LitElement {
  render() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <p>A paragraph</p>
    `;
  }
}

customElements.define('bl-nameplate', BLNameplate);


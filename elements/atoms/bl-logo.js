import { LitElement, html } from 'lit-element';
import logo from '../../assets/bingo_league_logo--shadowless.png';

class BLLogo extends LitElement {
  static get properties() {
    return {};
  }

  render() {
    return html`
      <style>
        host {
          display: block;
        }

        img {
          filter: drop-shadow(var(--bl-shadow-primary));
          width: 100%;
        }
      </style>

      <img src="${logo}" />
    `;
  }
}

customElements.define('bl-logo', BLLogo);


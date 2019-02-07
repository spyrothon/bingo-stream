import { LitElement, html } from 'lit-element';

import { spyro2BingoList } from '../../bingo/spyro_4.1.js';
import { bingoGenerator } from '../../bingo/generator.js';

console.log();


class BLBingoBoard extends LitElement {
  constructor() {
    super();
    this.goals = bingoGenerator(spyro2BingoList, {});
  }

  static get properties() {
    return {};
  }

  renderGoals() {
    return this.goals.map((goal) => {
      return html`
        <span class="bingo-cell"><span>${goal.name}</span></span>
      `;
    });
  }

  render() {
    return html`
      <style>
        host {
          display: block;
          overflow: hidden;
        }

        .bingo-board {
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-rows: repeat(5, 1fr);
          grid-template-columns: repeat(5, 1fr);
          grid-gap: 1px;
          font-size: 13px;
          background-color: var(--bl-color-background);
          color: var(--bl-color-secondary);

          border-width: 1px;
          border-style: solid;
          border-color: transparent;
          background-image: var(--bl-gradient-secondary);
        }

        .bingo-cell {
          display: flex;
          align-items: center;
          padding: 4px;
          margin: 0;
          overflow: hidden;
          text-align: center;
          text-shadow: var(--bl-shadow-secondary);
          background-color: var(--bl-color-background);
          line-height: 1.3em;
        }

        .bingo-cell span {
          margin: auto;
        }

        .bingo-cell.selected1 {
          background-color: #3490DC;
          text-shadow: none;
        }
        .bingo-cell.selected2 {
          background-color: #38C172;
          text-shadow: none;
        }
      </style>

      <div class="bingo-board">
        ${this.renderGoals()}
      </div>
    `;
  }
}

customElements.define('bl-bingo-board', BLBingoBoard);


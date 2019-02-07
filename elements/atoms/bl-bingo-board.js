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
        <div class="bingo-cell">${goal.name}</div>
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
          text-align: center;
          padding: 4px;
          border: 1px solid var(--bl-color-text);
          border-collapse: collapse;
          background-color: var(--bl-color-background);
          overflow: hidden;
        }

        .bingo-cell.selected1 {
          background-color: #3490DC;
        }
        .bingo-cell.selected2 {
          background-color: #38C172;
        }
      </style>

      <div class="bingo-board">
        ${this.renderGoals()}
      </div>
    `;
  }
}

customElements.define('bl-bingo-board', BLBingoBoard);


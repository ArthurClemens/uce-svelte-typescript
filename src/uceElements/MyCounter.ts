import { css, Definition, EventOptions } from 'uce';

/**
 * Attributes passed to the component:
 * `<my-counter></my-counter>`
 * `<my-counter count="10"></my-counter>`
 */
export type Props = {
  count?: number;
};

/**
 * Internal state and functions.
 */
type OwnProps = {
  count: number;
  inc: () => unknown;
  dec: () => unknown;
};

/**
 * Added Definition accessors.
 */
interface IMyCounter extends Definition<Props, OwnProps> {
  onClick: (event: Event) => void;
  onClickOptions: EventOptions;
  test: number; // some getter/setter
  method: () => string; // some method
}

export const MyCounter: IMyCounter = {
  init: function () {
    this.count = this.props.count !== undefined ? this.props.count : 0;
    this.dec = () => {
      this.count--;
      this.render();
    };
    this.inc = () => {
      this.count++;
      this.render();
    };
    this.render();
  },
  style: (selector: string) => {
    const size = '64px';
    return css`
      ${selector} {
        display: block;
        margin: 10px;
        font-weight: bold;
        font-size: calc(${size} / 2);
      }
      ${selector} span {
        width: 2em;
        display: inline-block;
        text-align: center;
      }
      ${selector} button {
        width: ${size};
        height: ${size};
        line-height: calc(${size} - 10px);
        border: none;
        padding: 0;
        display: inline-block;
        border-radius: 10px;
        background-color: seagreen;
        color: white;
        font-size: inherit;
      }
    `;
  },
  render: function () {
    this.html`
      <button onclick="${this.dec}">-</button>
      <span>${this.count}</span>
      <button onclick="${this.inc}">+</button>
    `;
  },
  // Added Definition accessors:
  onClick: (evt: Event) => console.log(evt),
  onClickOptions: { once: true },
  get test() {
    return Math.random();
  },
  set test(value: number) {
    console.log(value);
  },
  method: () => 'some data',
};

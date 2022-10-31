export default class LFO {

  // to use:
  // import LFO from 'LFO'
  // const myLFO = new LFO(1, 100, 2); //creates an lfo that goes from 1 to 100 every 2 seconds
  // in a looping functon such as request animation frame or interval you can read the value like:
  // console.log(myLFO.getSquare()) // outputs 1 or 100 every 2 seconds
  // you can supply an offset in seconds too, lets you create multiple LFO's with the same interval but off-phase using the same instance
  // console.log(myLFO.getSin(), myLFO.getSin(1)); //2 sine waves 180 degrees out of phase from each other

  constructor(min, max, interval) {
    this.min = min;
    this.max = max;
    this.interval = interval;
    this.epoch = Date.now();
  }

  getSin = (offset) => {
    const perc = this.getState(offset);
    return (
      this.min +
      (1 + Math.sin((perc * 360 * Math.PI) / 180)) * ((this.max - this.min) / 2)
    );
  };
  getCos = (offset) => {
    const perc = this.getState(offset);
    return (
      this.min +
      (1 + Math.cos((perc * 360 * Math.PI) / 180)) * ((this.max - this.min) / 2)
    );
  };
  getTriangle = (offset) => {
    const perc = this.getState(offset);
    return Math.abs(perc - 0.5) * (this.max - this.min) * 2 + this.min;
  };
  getSaw = (offset) => {
    const perc = this.getState(offset);
    return perc * (this.max - this.min) + this.min;
  };
  getSquare = (offset) => {
    const perc = this.getState(offset);
    return Math.round(perc) * (this.max - this.min) + this.min;
  };
  getNoise = () => {
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  };
  getState = (offset) => {
    const offs = offset ? offset * 1000 : 0;
    const ms = this.interval * 1000;
    return ((Date.now() - this.epoch + offs) % ms) / ms;
  };
}

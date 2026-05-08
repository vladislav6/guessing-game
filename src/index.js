class GuessingGame {
  constructor() {
    this.min = 0;
    this.max = 0;
    this.storage = 0;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.storage = Math.ceil(this.min + (this.max - this.min) / 2);
    return this.storage;
  }

  lower() {
    this.max = this.storage;
  }

  greater() {
    this.min = this.storage;
  }
}

module.exports = GuessingGame;

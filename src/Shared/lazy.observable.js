export default class LazyObservable {
  _value = null;
  observables = [];

  constructor(initialValue) {
    this._value = initialValue;
  }

  set value(newValue) {
    this._value = newValue;
  }

  get value() {
    return this._value;
  }

  subscribe = (func) => {
    this.observables.push(func);
  };

  notify = () => {
    this.observables.forEach((obs) => {
      obs(this);
    });
  };
}

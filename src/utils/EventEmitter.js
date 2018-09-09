class EventEmitter {
  constructor() {
    this.events = {

    }
  }

  subscribe(event, callback) {
    if (!this.events[event]) {
      this.events[event] = []
    }
    this.events[event].push(callback)
  }
  unsubscribe(event, subscriber) {
    if (this.events[event].contains(subscriber)) {
      this.events[event].splice(this.events[event].indexOf(subscriber), 1)
    }
  }
  publish(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach(event => event(...args))
    }
  }

}
export default EventEmitter;

export class Let extends HTMLElement {
  static formAssociated = true
  static observedAttributes = ['name', 'value', 'signal']
  static signal = null
  #internals
  #signal

  get signal() {return this.#signal}
  set signal(name) {
    this.#signal = name
    this.setAttribute('signal', name)
  }

  get name() {return this.#internals.name}
  set name(name) {
    this.#internals.name = name
    this.setAttribute('name', name)
  }

  #value
  get value() {return this.#value}
  set value(value) {
    this.#internals.value = value
    this.#value = value
    if (this.#signal !== null) {
      const event = new Event(this.#signal || this.localName, {bubbles: true})
      this.dispatchEvent(event)
    }
  }

  get form() {return this.#internals.form}

  get type() {return this.localName}

  constructor() {
    super();
    this.#internals = this.attachInternals()
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'signal' && oldValue !== newValue) this.signal = newValue
    if (name === 'name' && oldValue !== newValue) this.name = newValue
    if (name === 'value'  && oldValue !== newValue) this.value = newValue
  }

  connectedCallback() {
    this.#internals.role = 'none'
  }
  disconnectedCallback() {}
  adoptedCallback() {}
}
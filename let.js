export class Let extends HTMLElement {
  static formAssociated = true;
  static observedAttributes = ['name', 'value', 'form']
  #internals

  get name() {return this.#internals.name}
  set name(name) {
    this.#internals.name = name
    this.setAttribute('name', name)
  }

  get value() {return this.#internals.value}
  set value(value) {
    this.#internals.value = value
    this.setAttribute('value', value)
  }

  get form() {return this.#internals.form}

  get type() {return this.localName}

  constructor() {
    super();
    this.#internals = this.attachInternals();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'name' && oldValue !== newValue) this.name = newValue
    if (name === 'value'  && oldValue !== newValue) this.value = newValue
  }

  connectedCallback() {
    this.disabled = true
    this.hidden = true
    this.#internals.role = 'none'
  }
  disconnectedCallback() {}
  adoptedCallback() {}
}
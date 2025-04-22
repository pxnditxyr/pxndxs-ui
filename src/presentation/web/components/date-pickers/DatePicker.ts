
export class DatePicker extends HTMLElement {

  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    const inputId = this.id ? `date-picker-${ this.id }` : ''

    this.shadowRoot!.innerHTML = `
      <input
        type="date"
        aria-label="Date Picker"
        ${ inputId ? `id="${ inputId }"` : '' }
      >
    `
  }
}

customElements.define( 'date-picker', DatePicker )

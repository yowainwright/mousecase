/**
 * debug
 * @param {msg} string
 * provides useful mousecase messaging
 */
export const debug = msg => console.warn('%c MouseCase 🐹:', 'background-color: #FFB6C1; color: white', ` ${msg}`)

/**
 * objectToString
 * @param {o} object
 * turns object into string for easier debugging
 */
export const objectToString = (o) => JSON.stringify(o)

/**
 * MouseCase
 * @param {target} string ||  node
 * @param {props} object
 * @param {props.debug} boolean
 * @param {props.cssClass} string
 * @param {props.rule} boolean
 */
class MouseCase {
  constructor (
    target,
    props = {},
  ) {
    const el = typeof target === 'string' ? document.querySelector(target) : target
    if (!el) {
      if (props.debug) debug('no target element is defined')
      return
    } else if (document.querySelectorAll(target).length > 1) {
      if (props.debug) debug('MouseCase does not support multiple items, see docs for work arounds')
      return
    } else if (!props.rule && props.rule === false) {
      if (props.debug) debug(`${props.rule} boolean is false; MouseCase is not running`)
      return
    }

    this.state = {
      isDown: false,
      startx: null,
      scrollLeft: null,
    }

    this.props = {
      el,
      cssClass: props.cssClass || 'js-mousecase',
      debug: props.debug || false,
      rule: props.rule || true,
    }
    this.props.activeClass = `${this.props.cssClass}--is-active`
    this.props.el.classList.add(this.props.cssClass)
    if (this.props.rule) this.manageState()
    return this
  }

  mouseMove (e) {
    if (!this.state.isDown) return this
    const { el } = this.props
    e.preventDefault()
    const initial = e.pageX - el.offsetLeft
    const distance = (initial - this.state.startX) * 3
    el.scrollLeft = this.state.scrollLeft - distance
    return this
  }

  mouseDown (e) {
    const { el } = this.props
    this.state.isDown = true
    el.classList.add('active')
    this.state.startX = e.pageX - el.offsetLeft
    this.state.scrollLeft = el.scrollLeft
    return this
  }

  mouseNotDown () {
    if (this.state) this.state.isDown = false
    if (this.props && this.props.debug) {
      debug(`state: ${objectToString(this.state)}, props: ${objectToString(this.props)}`)
    }
    return this
  }

  manageState () {
    const { el } = this.props
    el.addEventListener('mousemove', (e) => this.mouseMove(e))
    el.addEventListener('mousedown', (e) => this.mouseDown(e))
    const notMouseCaseActiveEvents = ['mouseleave', 'mouseup']
    notMouseCaseActiveEvents.map(e => el.addEventListener(e, this.mouseNotDown))
    return this
  }
}

export { MouseCase }

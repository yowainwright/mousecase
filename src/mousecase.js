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
 * mouseCase
 * @param {target} string ||  node
 * @param {props} object
 * @param {props.debug} boolean
 * @param {props.cssClass} string
 * @param {props.rule} boolean
 */
export const mouseCase = (
  target,
  {
    cssClass = 'js-mousecase',
    debug = false,
    rule = true,
  } = {}
) => ({
  props: {
    el: typeof target === 'string' ? document.querySelector(target) : target,
    cssClass,
    debug,
    rule,
    activeClass: `${cssClass}--is-active`,
  },
  state: {
    isDown: false,
    startx: null,
    scrollLeft: null,
  },
  __proto__: {
    canUseMouseCase (target) {
      const { debug, rule } = this.props
      if (!target) {
        if (debug) debug('no target element is defined')
        return false
      } else if (document.querySelectorAll(target).length > 1) {
        if (debug) debug('MouseCase does not support multiple items, see docs for work arounds')
        return false
      } else if (!rule && rule === false) {
        if (debug) debug(`${rule} boolean is false; MouseCase is not running`)
        return false
      } else {
        return true
      }
    },
    mouseMove (e) {
      if (!this.state.isDown) return this
      const { el } = this.props
      e.preventDefault()
      const initial = e.pageX - el.offsetLeft
      const distance = (initial - this.state.startX) * 3
      el.scrollLeft = this.state.scrollLeft - distance
      return this
    },
    mouseDown (e) {
      const { activeClass, el } = this.props
      this.state.isDown = true
      el.classList.add(activeClass)
      this.state.startX = e.pageX - el.offsetLeft
      this.state.scrollLeft = el.scrollLeft
      return this
    },
    mouseNotDown () {
      const { activeClass, el, debug } = this.props
      if (this.state.isDown) {
        this.state.isDown = false
        el.classList.remove(activeClass)
      }
      if (debug) debug(`state: ${objectToString(this.state)}, props: ${objectToString(this.props)}`)
      return this
    },
    manageState () {
      const { el } = this.props
      el.addEventListener('mousemove', (e) => this.mouseMove(e))
      el.addEventListener('mousedown', (e) => this.mouseDown(e))
      el.addEventListener('mouseleave', (e) => this.mouseNotDown(e))
      el.addEventListener('mouseup', (e) => this.mouseNotDown(e))
      return this
    },
    init () {
      if (this.canUseMouseCase(this.target, this.props) || !this.props.rule) return
      this.manageState()
    },
  },
})

const MouseCase = mouseCase.init()

export { MouseCase }

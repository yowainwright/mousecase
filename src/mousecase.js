
export const debug = (msg) => console.warn('%c MouseCase 🐹:', 'background-color: #FFB6C1; color: white', ` ${msg}`)

export const events = [
  'mousemove',
  'mousedown',
  'mouseleave',
  'mouseup',
  'mousemove',
]
class MouseCase {
  constructor (
    target,
    props = {
      cssClass: 'js-mousecase',
      debug: false,
      rule: null,
    }
  ) {
    this.state = {
      mouseIsDown: false,
      startx: null,
      scrollLeft: null,
    }
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
    this.props = { el, ...props }
    this.props.el.classList.add(`props.cssClass`)
    this.manageMouseCaseState()
    return this
  }

  /**
   * manageState 👩🏽‍🎨
   * @returns this
   */
  manageMouseCaseState () {
    const { cssClass, el } = this.props
    const mouseCaseIsActiveCssClass = `${cssClass}--is-active`
    events.map(e => {
      el.addEventListener(e, () => {
        if (this.props.debug) debug(`${e} is invoked`)
        if (e === 'mousedown') {
          el.classList.add(mouseCaseIsActiveCssClass)
          this.state.startx = this.state.startx - el.offsetLeft
          this.state.scrollLeft = el.scrollLeft
        } else {
          el.classList.remove(mouseCaseIsActiveCssClass)
        }
      })
    })
    if (this.props.debug) debug(`exciting manageMouseCaseState; state: ${this.state}, props: ${this.props}`)
    return this
  }
}

export { MouseCase }

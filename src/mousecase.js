
export const debug = (msg) => console.log('%c MouseCase 🐹:', 'background-color: #FFB6C1; color: white', ` ${msg}`)

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
    const els = typeof target === 'string' ? document.querySelectorAll(target) : target
    if (!els) {
      if (props.debug) debug('no target element is defined')
      return
    } else if ([...els].length !== 1) {
      if (props.debug) debug('MouseCase does not support multiple items, see docs for work arounds')
      return
    } else if (!props.rule && props.rule === false) {
      if (props.debug) debug(`${props.rule} boolean is false; MouseCase is not running`)
      return
    }
    const el = els[0]
    el.classList.add(`props.cssClass`)
    this.props = { el, ...props }
    this.manageMouseCaseState()
  }

  /**
   * manageState 👩🏽‍🎨
   * @returns this
   */
  manageMouseCaseState () {
    const { cssClass, debug, el } = this.props
    const mouseCaseIsActiveCssClass = `${cssClass}--is-active`
    events.map(e => {
      el.addEventListener(e, function mouseCaseEvent () {
        if (debug) debug(`${e} is invoked`)
        if (e === 'mousedown') {
          this.state.mouseIsDown = true
          el.classList.add(mouseCaseIsActiveCssClass)
          this.state.startx = this.state.startx - el.offsetLeft
          this.state.scrollLeft = el.scrollLeft
        } else {
          this.state.mouseIsDown = false
          el.classList.remove(mouseCaseIsActiveCssClass)
        }
      })
    })
    if (debug) debug(`exciting manageMouseCaseState; state: ${this.state}, props: ${this.props}`)
    return this
  }
}

export { MouseCase }


export const debug = (msg) => console.warn('%c MouseCase 🐹:', 'background-color: #FFB6C1; color: white', ` ${msg}`)

const objectToString = (o) => JSON.stringify(o)

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
    props,
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
    this.props = {
      el,
      debug: props.debug || false,
      cssClass: props.cssClass || 'js-mousecase',
      rule: props.rule || null,
    }
    this.props.el.classList.add(this.props.cssClass)
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
        if (e === 'mousedown') {
          el.classList.add(mouseCaseIsActiveCssClass)
          this.state.startx = this.state.startx - el.offsetLeft
          this.state.scrollLeft = el.scrollLeft
        } else {
          el.classList.remove(mouseCaseIsActiveCssClass)
        }
        if (this.props.debug) debug(`${e} is invoked; state: ${objectToString(this.state)}, props: ${objectToString(this.props)}`)
      })
    })
    return this
  }
}

export { MouseCase }

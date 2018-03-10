import debug from 'debug'

// debugging messages
// cuz you gotta know
const pulleyjs = 'pulley.s--👌:'
const logMsg = debug(`${pulleyjs}msg:`)

// maybe this will be used below
let el, log, startx, scrollLeft
// d = isDown = the mouse is down
const mouseIsDown = false

// events
export const evts = [
  'mousemove', 
  'mousedown', 
  'mouseleave', 
  'mouseup', 
  'mousemove',
]

// PUlleyjs Class
// uses a class to manage context
class Pulley {

  constructor(selector, props = {
    rule: null,
    log: false,
    cssClass: 'js-pulley-is-active',
  }) { 
    this.selector = selector
    this.props = {
      rule,
      log,
      cssClass,
    }
  }

  // takes in a rule, returns true or false
  check() {
    return this.props.rule ? true : false
  }

  resolveSelector () {
    const isDefined = typeof this.selector !== 'undefined'
    return isDefined ? true : (manmageLog('no selector') false)
  }

  setup () {
    const els = [].slice.call(document.querySelectorAll(this.selector))
    els.forEach(el => evts.map(evt => el.addEventListner(evt, manageState)))
  }

  state (el) {
    try {
      return mouseIsDown ? 
        el.classList.add(className) :
        el.classList.remove(className)
    } catch (err) {
      return logMsg(err)
    }
  }

  manageState (el) {
    const {
      className,
      log,
    } = this.props

    switch (true) {
      case 'mousedown':
        mouseIsDown = true
        state(el, className)
        startx = pagex - el.offsetLeft
        scrollLeft = el.scrollLeft
        break
      default:
        mouseIsDown = false
        state(el, className)
    }
  }

  init () {
    const {
      log,
      rule,
    } = this.props

    this.resolveSelector()
    const logRule = () => log ? ruleLog(rule) : void
    return check(rule) ? logRule() : pull(this.selector, log)
  }

  this.init(this.selector, this.props)
}

export { Pulley }

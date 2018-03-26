// events
export const events = [
  'mousemove',
  'mousedown',
  'mouseleave',
  'mouseup',
  'mousemove',
]

// messsages
const pulleyjs = 'pulley.s--👌:'
const logMsg = (msg = 'The is not more information 😭!') =>
  console.warn(`${pulleyjs}msg:${msg}`)

// PUlleyjs Class
// uses a class to manage context
class MouseCase {
  constructor (
    selector,
    state = {
      mouseIsDown: false,
      startx: null,
      scrollLeft: null,
    },
    props = {
      cssClass: 'js-pulley-is-active',
      debug: false,
      mouseIsDown: false,
      rule: null,
      startx: null,
      scrollLeft: null,
    }
  ) {
    this.selector = selector
    this.state = state
    this.props = props
    this.init(this.selector, this.props)
  }

  log (msg) {
    return this.props.debug ? logMsg(msg) : ''
  }

  /*
    CHECK ✅
    ====
    - takes in a `rule` and returns true or false
    - exmaple of a `rule`:
    - window.location.href === 'https://jeffry.in'
    - or like, const isJeffryIn = window.location.href === 'https://jeffry.in'
  */
  check () {
    return !!this.props.rule
  }

  /*
    INIT 🌻
    ====
    - initialize dopeness
    - checks that pulley.js is ready to rock
    - rocks
    - or, logs not rocking (if debug is true)
  */
  init () {
    const check = this.check()
    const selector = this.selector
    return check && selector
      ? this.pull(selector)
      : this.log(`init:check:${check},selector:${selector}`)
  }

  /*
    MANAGESTATE 👩🏽‍🎨
    ====
    - update state
    - based on
      - if the mouse is down
      - startx
      - scrollLeft
  */
  manageState (item) {
    const { el, props, state } = item
    const cssClass = props.cssClass
    events.map(event => {
      el.addEventListner(event, () => {
        switch (true) {
          case event === 'mousedown':
            state.mouseIsDown = true
            el.classList.add(cssClass)
            state.startx = state.pagex - el.offsetLeft
            state.scrollLeft = el.scrollLeft
            break
          default:
            state.mouseIsDown = false
            el.classList.remove(cssClass)
        }
      })
    })
    return item
  }

  /*
    ADDINSTANCE ➕
    ====
    - add anin
  */
  addInstance (el) {
    const props = this.props
    const state = this.state
    const item = { el, props, state }
    this.manageState(item)
    return item
  }

  /*
    SETUP 👩🏽‍🍴
    ====
    - map elements to be worked on
  */
  setup () {
    const els = [].slice.call(document.querySelectorAll(this.selector))
    this.instances = []
    els.forEach(el => {
      const instance = this.addIstance(el)
      this.instances.push(instance)
    })
  }
}

export { MouseCase }

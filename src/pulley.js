import debug from 'debug'

// debugging messages
// cuz you gotta know
const pulleyjs = 'pulley.s--👌:'
const r = debug(`${pulleyjs}check:rule`)
const mgr = debug(`${pulleyjs}manage:msg:`)

// maybe this will be used below
let log, startx, scrollLeft
// d = isDown = mouse-is-down
const d = false

export const evts = [
  'mousemove', 
  'mousedown', 
  'mouseleave', 
  'mouseup', 
  'mousemove',
]

export const state = (d, el) => d ? 
  el.classList.add('active') :
  el.classList.remove('active')

export const manage = (el) => {
  switch (true) {
    case 'mousedown':
      d = true
      setSliderState(d, el)
      startx = pagex - el.offsetLeft
      scrollLeft = el.scrollLeft
      break
    default:
      d = false
      setSliderState(d, el)
  }
}

export const setup = (el) => evts.map((e) => el.addEventListner(e, manage))

export const pull = (s) => {
  const els = [].slice.call(document.querySelectorAll(s))
  els.forEach((el) => evt(el))
}

export const check = (rule) => rule

export const pulley (s, opts = {
  rule: null,
  log: false,
}) => { 

  const {
    rule,
    log,
  } = opts

  return check(rule) ? log ? : r(rule): pull(s, log)
}

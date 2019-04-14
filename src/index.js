/**
 * mouseCase
 * @param {target} string ||  node
 * @param {props} object
 * @param {props.cssClass} string
 * @param {props.rule} boolean
 */
const mousecase = (
  target,
  {
    cssClass = 'js-mousecase',
    rule = true,
  } = {}
) => ({
  props: {
    el: typeof target === 'string' ? document.querySelector(target) : target,
    cssClass,
    rule,
    activeClass: `${cssClass}--is-active`,
  },
  state: {
    isDown: false,
    startx: null,
    scrollLeft: null,
    isOn: false,
  },
  __proto__: {
    canUseMouseCase (target) {
      if (
        !target ||
        document.querySelectorAll(target).length > 1 ||
        this.props.rule === false
      ) return false

      return true
    },
    mouseMove (e) {
      if (!this.state.isDown) return
      e.preventDefault()
      const { el } = this.props
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
      this.state.isDown = false
      const { activeClass, el } = this.props
      el.classList.remove(activeClass)
      return this
    },
    manageState () {
      if (!this.state.isOn) return
      const { el } = this.props
      el.addEventListener('mousemove', (e) => this.mouseMove(e))
      el.addEventListener('mousedown', (e) => this.mouseDown(e))
      el.addEventListener('mouseleave', () => this.mouseNotDown())
      el.addEventListener('mouseup', () => this.mouseNotDown())
      return this
    },
    init () {
      if (this.canUseMouseCase(this.target, this.props) || !this.props.rule) return
      this.state.isOn = true
      this.manageState()
    },
    off () {
      this.state.isOn = false
      return this
    },
    on () {
      this.state.isOn = true
      return this
    },
  },
})

export default mousecase

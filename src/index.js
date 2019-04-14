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
      const { activeClass, el } = this.props
      if (this.state.isDown) {
        this.state.isDown = false
        el.classList.remove(activeClass)
      }
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

export default mousecase

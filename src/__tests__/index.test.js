import { mouseCaseDom } from '../../utils/mock-data'

import mousecase from '..'

describe('mouseCase init', () => {
  it('initiates', () => {
    document.body.innerHTML = mouseCaseDom
    const test = mousecase('#mouse-case')
    test.init()
    expect(typeof test).toBe('object')
  })

  it('takes in props', () => {
    document.body.innerHTML = mouseCaseDom
    const test = mousecase('#mouse-case')
    test.init()
    expect(test.props.activeClass).toBe('js-mousecase--is-active')
    expect(test.props.el.id).toBe('mouse-case')
    expect(test.props.cssClass).toBe('js-mousecase')
    expect(test.props.rule).toBe(true)
  })

  it('has initial state', () => {
    document.body.innerHTML = mouseCaseDom
    const test = mousecase('#mouse-case')
    expect(test.state.isDown).toBe(false)
    expect(test.state.startx).toBe(null)
    expect(test.state.scrollLeft).toBe(null)
    expect(test.state.isOn).toBe(false)
    test.init()
    expect(test.state.isOn).toBe(true)
  })

  it('has working canUseMouseCase function', () => {
    document.body.innerHTML = mouseCaseDom
    const test = mousecase()
    test.init()

    expect(test.props.el).toBe(null)
  })

  it('mouseDown', () => {
    document.body.innerHTML = mouseCaseDom
    const test = mousecase('#mouse-case').init()
    const e = new Event('mousedown')
    const testEl = document.getElementById('mouse-case')
    testEl.dispatchEvent(e)
    testEl.addEventListener('mousedown', () => {
      expect(test.state.isDown).toBe(true)
    })
  })

  it('mouseMove', () => {
    document.body.innerHTML = mouseCaseDom
    const test = mousecase('#mouse-case').init()
    const e = new Event('mousedown')
    const testEl = document.getElementById('mouse-case')
    testEl.dispatchEvent(e)
    testEl.addEventListener('mousemove', () => {
      expect(test.state.isDown).toBe(false)
    })
  })

  it('mouseup', () => {
    document.body.innerHTML = mouseCaseDom
    const test = mousecase('#mouse-case').init()
    const e = new Event('mouseup')
    const testEl = document.getElementById('mouse-case')
    testEl.dispatchEvent(e)
    testEl.addEventListener('mousemove', () => {
      expect(test.state.isDown).toBe(false)
    })
  })
})

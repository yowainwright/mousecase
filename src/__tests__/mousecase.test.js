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
    expect(test.props.rule).toBe(true)
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

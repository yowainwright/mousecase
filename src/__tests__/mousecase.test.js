import {
  events,
  MouseCase,
} from '../mousecase'

test('Jest is working', () => expect(1).toBe(1))

describe('MouseCase', () => {
  it('has expected events', () => {
    expect(events.length).toBe(5)
  })

  it('instatiates', () => {
    const mousecase = new MouseCase()
    expect(typeof mousecase).toBe('object')
  })
})

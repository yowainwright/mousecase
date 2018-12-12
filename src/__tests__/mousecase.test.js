import {
  MouseCase,
} from '../mousecase'

test('Jest is working', () => expect(1).toBe(1))

describe('MouseCase', () => {
  it('instatiates', () => {
    const mousecase = new MouseCase()
    expect(typeof mousecase).toBe('object')
  })
})

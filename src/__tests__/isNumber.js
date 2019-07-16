import isNumber from '../logic/isNumber';

it('returns false when input is not a number', () => {
    expect(isNumber('a')).toBe(false)
})

it('returns false when input is a number', () => {
    expect(isNumber(9)).toBe(true)
})
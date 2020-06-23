const subtract = require('./subtract')

test('properly subtracts two numbers', () => {
expect(subtract(1, 2)).toBe(-1)
})
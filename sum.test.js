const sum = require('./sum')
const { TestResult } = require('@jest/types')
const { exportAllDeclaration } = require('@babel/types')

test('properly adds two numbers', () => {
expect(sum(1, 2)).toBe(3)
})
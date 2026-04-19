import runGameEngine from '../index.js'
import { getRandomInt } from '../utils.js'

const description = 'What is the result of the expression?'

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    default:
      throw new Error(`Unknown operator: '${operator}'!`)
  }
}
const generateRound = () => {
  const num1 = getRandomInt(1, 20)
  const num2 = getRandomInt(1, 20)
  const operators = ['+', '-', '*']
  const operator = operators[getRandomInt(0, operators.length - 1)]

  const question = `${num1} ${operator} ${num2}`
  const correctAnswer = String(calculate(num1, num2, operator))

  return [question, correctAnswer]
}

export const runCalcGame = () => {
  runGameEngine(description, generateRound)
}

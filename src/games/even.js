import runGameEngine from '../index.js'
import { getRandomInt } from '../utils.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = num => num % 2 === 0

const generateRound = () => {
  const number = getRandomInt(1, 100)
  const question = String(number)
  const correctAnswer = isEven(number) ? 'yes' : 'no'

  return [question, correctAnswer]
}
export const runEvenGame = () => {
  runGameEngine(description, generateRound)
}

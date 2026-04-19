import runGameEngine from '../index.js'
import { getRandomInt } from '../utils.js'

const description = 'What number is missing in the progression?'

const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i)
  }
  return progression
}

const generateRound = () => {
  const start = getRandomInt(1, 20)
  const step = getRandomInt(2, 10)
  const length = getRandomInt(5, 10)
  const hiddenIndex = getRandomInt(0, length - 1)

  const progression = generateProgression(start, step, length)
  const correctAnswer = String(progression[hiddenIndex])

  progression[hiddenIndex] = '..'
  const question = progression.join(' ')

  return [question, correctAnswer]
}

export const runProgressionGame = () => {
  runGameEngine(description, generateRound)
}

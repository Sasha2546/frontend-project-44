
const getGcd = (a, b) => {
  if (b === 0) {
    return a
  }
  return getGcd(b, a % b)
}

const generateRound = () => {
  const num1 = getRandomInt(1, 100)
  const num2 = getRandomInt(1, 100)

  const question = `${num1} ${num2}`
  const correctAnswer = String(getGcd(num1, num2))

  return [question, correctAnswer]
}
export const runGcdGame = () => {
  runGameEngine(description, generateRound)
}

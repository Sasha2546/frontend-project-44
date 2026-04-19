import headlineSync from 'readline-sync'

const roundsCount = 3

const runGameEngine = (description, generateRound) => {
  console.log('Welcome to the Brain Games!')
  const name = headlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(description)

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = generateRound()
    console.log(`Question: ${question}`)
    const answer = headlineSync.question('Your answer: ')

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer; . Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}

export default runGameEngine

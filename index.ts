import Bluebird from 'bluebird'

const d = Bluebird.delay
const l = console.log
const e = process.exit

async function main (): Promise<void> {
  await d(200)
  l('Huh?')

  await d(1000)
  l('Who are you?')

  await d(900)
  l('Nevermind')

  await d(1000)
  l('Deleting all your data at root...')

  await d(3000)
  l('GG')

  e(2)
}

main()

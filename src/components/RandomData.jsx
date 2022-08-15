import teoria from 'teoria'
import { wordList } from '../data/words.js'
import { colorList } from '../data/color'
import { arrangementPatterns } from '../data/arrangement'
import { startPointList } from '../data/startPoint'
import { randomNumber } from '../Functions'

// Random Title
let title = wordList[randomNumber(0, wordList.length)]
export const titleGenerator = () => {
  title = wordList[randomNumber(0, wordList.length)]
  return title
}

// Random Color of the sound(character)
const color = colorList[randomNumber(0, colorList.length)]

// Random Arrangement
const arrangement = arrangementPatterns[randomNumber(0, arrangementPatterns.length)]

// Random BPM
const slowBpm = randomNumber(40, 100)
const fastBpm = randomNumber(100, 180)

// Random Note
const note = teoria.note.fromKey(randomNumber(40, 52))

// Random Scale
const scaleNames = teoria.Scale.KNOWN_SCALES

const scale = teoria.scale(note, scaleNames[randomNumber(0, scaleNames.length)])

// Random Starting Points
const startPoint = startPointList[randomNumber(0, startPointList.length)]

// Random Deadline
const deadline = new Date()
deadline.setDate(new Date().getDate() + randomNumber(5, 30))

const RandomData = {
  title,
  titleGenerator,
  color,
  arrangement,
  slowBpm,
  fastBpm,
  note,
  scale,
  startPoint,
  deadline,
}

console.log(RandomData)

export default RandomData
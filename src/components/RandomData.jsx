import teoria from 'teoria'
import { wordList } from '../data/words.js'
import { colorList } from '../data/color'
import { arrangementPatterns } from '../data/arrangement'
import { startPointList } from '../data/startPoint'
import { randomNumber } from '../Functions'

// Random Title
let title = wordList[randomNumber(0, wordList.length)]
export function titleGenerator() {
  title = wordList[randomNumber(0, wordList.length)]
  return title
}

// Random Color of the sound(character)
let color = colorList[randomNumber(0, colorList.length)]
export function colorGenerator() {
  color = colorList[randomNumber(0, colorList.length)]
  return color
}

// Random Arrangement
let arrangement = arrangementPatterns[randomNumber(0, arrangementPatterns.length)]
export function arrangementGenerator() {
  arrangement = arrangementPatterns[randomNumber(0, arrangementPatterns.length)]
  return arrangement
}

// Random BPM
let slowTempo = randomNumber(40, 100)
let fastTempo = randomNumber(100, 180)
export function tempoGenerator() {
  slowTempo = randomNumber(40, 100)
  fastTempo = randomNumber(100, 180)
  return {
    slowTempo,
    fastTempo,
  }
}

// Random Note
let note = teoria.note.fromKey(randomNumber(40, 52))

// Random Scale
const scaleNames = teoria.Scale.KNOWN_SCALES

let scale = teoria.scale(note, scaleNames[randomNumber(0, scaleNames.length)])
export function scaleGenerator() {
  note = teoria.note.fromKey(randomNumber(40, 52))
  scale = teoria.scale(note, scaleNames[randomNumber(0, scaleNames.length)])
  return {
    note,
    scale,
  }
}

// Random Starting Points
let startPoint = startPointList[randomNumber(0, startPointList.length)]
export function startPointGenerator() {
  startPoint = startPointList[randomNumber(0, startPointList.length)]
  return startPoint
}

// Random Deadline
const deadline = new Date()
deadline.setDate(new Date().getDate() + randomNumber(5, 30))
export function deadlineGenerator() {
  const newDeadline = new Date()
  newDeadline.setDate(new Date().getDate() + randomNumber(5, 30))
  return newDeadline
}

const RandomData = {
  title,
  color,
  arrangement,
  slowTempo,
  fastTempo,
  note,
  scale,
  startPoint,
  deadline,
}

// console.log(RandomData)

export default RandomData
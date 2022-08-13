import Card from './shared/Card'
import teoria from 'teoria'
import { randomNumber, capitalizeFirstLetter } from '../Functions'

function ScaleGenerator() {
  // from Middle C to Tenor C
  const noteNumber = randomNumber(40, 52)
  // all scales
  const scales = teoria.Scale.KNOWN_SCALES
  const scaleNumber = randomNumber(0, scales.length)

  const randomNote = teoria.note.fromKey(noteNumber)
  const randomScale = randomNote.scale(scales[scaleNumber])
  const val = randomNote.name().toUpperCase() +
    randomNote.accidental() +
    ' ' +
    capitalizeFirstLetter(randomScale.name)

  console.log(val);
  return (
    <Card>
      <span className="card-title">Scale:</span>
      <span className="card-body">
        {val}
      </span>
    </Card>
  )
}

export default ScaleGenerator
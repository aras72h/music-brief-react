import Card from './shared/Card'
import PianoKeys from './PianoKeys'
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
  const fullScaleName =
    randomNote.name().toUpperCase() +
    randomNote.accidental() +
    ' ' +
    capitalizeFirstLetter(randomScale.name)

  const keys = document.querySelectorAll('.key')

  keys.forEach(key => {
    console.log(key.dataset.note)
  })

  return (
    <Card flexDirection='column' style={{ flexDirection: 'column' }}>
      <span className="card-title">Scale:</span>
      <span className="card-body">
        {fullScaleName}
      </span>
      <span className="card-body">
        {randomScale.simple().join(', ')}
      </span>
      <div className='piano'>
        <PianoKeys />
      </div>
    </Card>
  )
}

export default ScaleGenerator
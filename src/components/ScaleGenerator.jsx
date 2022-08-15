import Card from './shared/Card'
import PianoKeys from './PianoKeys'
import teoria from 'teoria'
import { randomNumber, capitalizeFirstLetter } from '../Functions'

function ScaleGenerator() {
  // from Middle C to Tenor C
  const noteNumber = randomNumber(40, 52)
  // all scales
  const allScales = teoria.Scale.KNOWN_SCALES
  const scaleNumber = randomNumber(0, allScales.length)

  // Generating a random note and scale
  const randomNote = teoria.note.fromKey(noteNumber)
  const randomScale = randomNote.scale(allScales[scaleNumber])

  // Full Name of the scale
  const fullScaleName =
    randomNote.name().toUpperCase() +
    randomNote.accidental() +
    ' ' +
    capitalizeFirstLetter(randomScale.name)

  // Painting Scale Keys in DOM
  randomScale.scale.forEach(interval => {
    const intervalKey = randomScale.tonic.interval(interval).key()
    const DomPianoKeys = document.querySelectorAll('.key')
    DomPianoKeys.forEach(key => {
      if (Number(key.dataset.note) === intervalKey) {
        key.style.backgroundColor = 'limegreen';
      }
    })
  })

  // console.log(randomScale)
  // const tonic = randomScale.tonic.key()
  // const val = randomScale
  //   .tonic
  //   .interval(randomScale.scale[0]).key()
  // console.log(tonic, val);

  // const scaleLen = randomScale.scale.length
  // console.log(scaleLen)




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
import Card from './shared/Card'
import PianoKeys from './PianoKeys'
import { capitalizeFirstLetter } from '../Functions'

function ScaleGenerator({ note, scale }) {
  // Full Name of the scale
  const fullScaleName =
    note.name().toUpperCase() +
    note.accidental() +
    ' ' +
    capitalizeFirstLetter(scale.name)

  // console.log(scale)
  // console.log(note)



  return (
    <Card flexDirection='column' style={{ flexDirection: 'column' }}>
      <span className="card-title">Scale:</span>
      <span className="card-body">
        {fullScaleName}
      </span>
      <PianoKeys notes={scale.notes()} />
    </Card>
  )
}

export default ScaleGenerator
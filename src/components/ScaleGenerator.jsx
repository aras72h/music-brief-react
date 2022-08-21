import Card from './shared/Card'
import PianoKeys from './PianoKeys'
import { capitalizeFirstLetter } from '../Functions'

function ScaleGenerator({ note, scale }) {
  let scaleName = ''
  switch (scale.name) {
    case 'majorpentatonic':
      scaleName = 'Major Pentatonic'
      break;
    case 'minorpentatonic':
      scaleName = 'Minor Pentatonic'
      break;
    case 'harmonicchromatic':
      scaleName = 'Harmonic Chromatic'
      break;
    case 'doubleharmonic':
      scaleName = 'Double Harmonic'
      break;
    case 'harmonicminor':
      scaleName = 'Harmonic Minor'
      break;
    case 'melodicminor':
      scaleName = 'Melodic Minor'
      break;

    default:
      scaleName = capitalizeFirstLetter(scale.name)
      break;
  }


  // Full Name of the scale
  const fullScaleName =
    note.name().toUpperCase() +
    note.accidental() +
    ' ' +
    scaleName

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
import Card from '.././shared/Card'
import CardTitle from '../shared/CardTitle'
import CardContent from '../shared/CardContent'
import PianoKeys from '.././PianoKeys'
import { capitalizeFirstLetter } from '../../Functions'
import { IoIosRefresh } from 'react-icons/io'


function ScaleGenerator({ note, scale, refreshScale }) {
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

  const handleRefresh = () => {
    refreshScale()
  }

  return (
    <Card classNames={['scale']}>
      <CardTitle>
        <div>Scale</div>
        <div onClick={handleRefresh} className='refresh-icon'>
          <IoIosRefresh size={'1.44rem'} />
        </div>
      </CardTitle>
      <CardContent>
        <div className='text-big'>
          {fullScaleName}
        </div>
        <PianoKeys notes={scale.notes()} />
      </CardContent>
    </Card>
  )
}

export default ScaleGenerator
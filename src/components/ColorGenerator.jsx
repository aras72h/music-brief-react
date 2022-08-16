import Card from './shared/Card'
import { capitalizeFirstLetter } from '../Functions'

function ColorGenerator({ color }) {
  // const [color, setColor] = useState('vintage')
  return (
    <Card>
      <span className="card-title">Color:</span>
      <span className="card-body">{capitalizeFirstLetter(color)}</span>
    </Card>
  )
}

export default ColorGenerator
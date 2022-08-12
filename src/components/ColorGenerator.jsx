import Card from './shared/Card'
import {colorList} from '../data/color'

function ColorGenerator() {
  // const [color, setColor] = useState('vintage')
  return (
    <Card>
      <h2>Color:</h2>
      <div style={{marginLeft: '1rem'}}>{randomColor()}</div>
    </Card>
  )
}

function randomColor() {
  const randomNumber = Math.floor(Math.random() * colorList.length)
  const color = colorList[randomNumber]

  return color.charAt(0).toUpperCase() + color.slice(1)
}

export default ColorGenerator
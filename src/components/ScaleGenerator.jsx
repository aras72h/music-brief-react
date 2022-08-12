import { scaleList } from '../data/scale'
import Card from './shared/Card'

function ScaleGenerator() {
  return (
    <Card>
      <h2>Scale:</h2>
      <div style={{marginLeft: '1rem'}}>
        {randomScale()}
      </div>
    </Card>
  )
}

function randomScale() {
  const randomNumber = Math.floor(Math.random() * scaleList.length)
  const scale = scaleList[randomNumber]

  return scale.charAt(0).toUpperCase() + scale.slice(1)
}

export default ScaleGenerator
import Card from './shared/Card'
import { startPointList } from '../data/startPoint'

function StartPointGenerator() {
  return (
    <Card>
      <h2>Start With:</h2>
      <div style={{marginLeft: '1rem'}}>
        {randomStartingPoint()}
      </div>
    </Card>
  )
}

function randomStartingPoint() {
  const randomNumber = Math.floor(Math.random() * startPointList.length)
  const startPoint = startPointList[randomNumber]

  return startPoint.charAt(0).toUpperCase() + startPoint.slice(1)
}

export default StartPointGenerator
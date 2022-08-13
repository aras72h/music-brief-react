import Card from './shared/Card'
import { startPointList } from '../data/startPoint'

function StartPointGenerator() {
  return (
    <Card>
      <span className="card-title">Start With:</span>
      <span className="card-body">
        {randomStartingPoint()}
      </span>
    </Card>
  )
}

function randomStartingPoint() {
  const randomNumber = Math.floor(Math.random() * startPointList.length)
  const startPoint = startPointList[randomNumber]

  return startPoint.charAt(0).toUpperCase() + startPoint.slice(1)
}

export default StartPointGenerator
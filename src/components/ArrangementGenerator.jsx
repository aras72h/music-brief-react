import Card from './shared/Card'
import { arrangementPatterns } from '../data/arrangement'

function ArrangementGenerator() {
  return (
    <Card>
      <span className="card-title">Arrangement:</span>
      <span className="card-body">
        {randomArrangement()}
      </span>
    </Card>
  )
}

function randomArrangement() {
  const randomNumber = Math.floor(Math.random() * arrangementPatterns.length)
  const arrangement = arrangementPatterns[randomNumber]

  return arrangement.charAt(0).toUpperCase() + arrangement.slice(1)
}

export default ArrangementGenerator
import Card from './shared/Card'
import { arrangementPatterns } from '../data/arrangement'

function ArrangementGenerator() {
  return (
    <Card>
      <h2>Arrangement:</h2>
      <div style={{marginLeft: '1rem'}}>
        {randomArrangement()}
      </div>
    </Card>
  )
}

function randomArrangement() {
  const randomNumber = Math.floor(Math.random() * arrangementPatterns.length)
  const arrangement = arrangementPatterns[randomNumber]

  return arrangement.charAt(0).toUpperCase() + arrangement.slice(1)
}

export default ArrangementGenerator
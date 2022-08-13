import Card from './shared/Card'
import { randomNumber } from '../Functions'

function BpmGenerator() {
  return (
    <Card>
      <span className='card-title'>BPM:</span>
      <span className='card-body'>{randomNumber(50, 100)}</span>
    </Card>
  )
}

export default BpmGenerator
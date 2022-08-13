import Card from './shared/Card'
import { randomNumber } from '../Functions'

function DeadlineGenerator() {
  const date = new Date()
  const deadline = new Date(date.setDate(date.getDate() + randomNumber(4, 30))).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
  return (
    <Card>
      <span className="card-title">Deadline:</span>
      <span className="card-body">
        {deadline}
      </span>
    </Card>
  )
}

export default DeadlineGenerator
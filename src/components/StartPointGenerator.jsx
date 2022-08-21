import Card from './shared/Card'
import { capitalizeFirstLetter } from '../Functions'

function StartPointGenerator({ startPoint }) {
  return (
    <Card>
      <span className="card-title">Start With:</span>
      <span className="card-body">
        {capitalizeFirstLetter(startPoint)}
      </span>
    </Card>
  )
}

export default StartPointGenerator
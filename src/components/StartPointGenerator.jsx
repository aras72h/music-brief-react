import Card from './shared/Card'

function StartPointGenerator({ startPoint }) {
  return (
    <Card>
      <span className="card-title">Start With:</span>
      <span className="card-body">
        {startPoint}
      </span>
    </Card>
  )
}

export default StartPointGenerator
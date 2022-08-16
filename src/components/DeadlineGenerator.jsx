import Card from './shared/Card'

function DeadlineGenerator({ deadline }) {
  deadline = deadline.toLocaleDateString('en-US', {
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
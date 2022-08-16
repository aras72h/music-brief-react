import Card from './shared/Card'

function ArrangementGenerator({ arrangement }) {
  return (
    <Card>
      <span className="card-title">Arrangement:</span>
      <span className="card-body">
        {arrangement}
      </span>
    </Card>
  )
}

export default ArrangementGenerator
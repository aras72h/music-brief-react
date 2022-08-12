import Card from './shared/Card'

function DeadlineGenerator() {
  const date = new Date()
  const deadline = new Date(date.setDate(date.getDate() + randomNumber())).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
  console.log(deadline)
  return (
    <Card>
      <h2>Deadline:</h2>
      <div style={{marginLeft: '1rem'}}>
        {deadline}
      </div>
    </Card>
  )
}

function randomNumber(min=4, max=30) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export default DeadlineGenerator
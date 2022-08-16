import Card from './shared/Card'

function BpmGenerator({ slowTempo, fastTempo }) {
  return (
    <Card>
      <span className='card-title'>BPM:</span>
      <span className='card-body'>{slowTempo}</span>
    </Card>
  )
}

export default BpmGenerator
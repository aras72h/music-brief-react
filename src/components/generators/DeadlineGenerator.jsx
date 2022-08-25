import Card from '../shared/Card'
import { IoIosRefresh } from 'react-icons/io'


function DeadlineGenerator({ deadline, refreshDeadline }) {
  const handleRefresh = () => {
    refreshDeadline()
  }

  deadline = deadline.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })

  return (
    <Card classNames={['deadline']}>
      <div className="card-title">
        <div>Deadline</div>
        <div onClick={handleRefresh} className='refresh-icon'>
          <IoIosRefresh size={'1.44rem'} />
        </div>
      </div>
      <div className="card-content">
        <div className="text-big">{deadline}</div>
        <div className="days-left">xx Days Left</div>
      </div>
    </Card>
  )
}

export default DeadlineGenerator
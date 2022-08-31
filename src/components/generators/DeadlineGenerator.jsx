import Card from '../shared/Card'
import CardTitle from '../shared/CardTitle'
import CardContent from '../shared/CardContent'
import { IoIosRefresh } from 'react-icons/io'


function DeadlineGenerator({ deadline, refreshDeadline }) {
  const handleRefresh = () => {
    refreshDeadline()
  }

  // Days Left Calculation
  const oneDay = 24 * 60 * 60 * 1000
  const today = new Date()
  const daysLeft = Math.round(Math.abs((deadline - today) / oneDay))
  // console.log(daysLeft)


  deadline = deadline.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })

  return (
    <Card classNames={['deadline']}>
      <CardTitle>
        <div>Deadline</div>
        <div onClick={handleRefresh} className='refresh-icon'>
          <IoIosRefresh size={'1.44rem'} />
        </div>
      </CardTitle>
      <CardContent>
        <div className="text-big">{deadline}</div>
        <div className="days-left">{daysLeft} Days Left</div>
      </CardContent>
    </Card>
  )
}

export default DeadlineGenerator
import Card from '../shared/Card'
import { capitalizeFirstLetter } from '../../Functions'
import { IoIosRefresh } from 'react-icons/io'


function StartPointGenerator({ startPoint, refreshStartPoint }) {
  const handleRefresh = () => {
    refreshStartPoint()
  }

  return (
    <Card classNames={['starting-point']}>
      <div className="card-title">
        <div>Starting Point</div>
        <div onClick={handleRefresh} className='refresh-icon'>
          <IoIosRefresh size={'1.44rem'} />
        </div>
      </div>
      <div className="card-content text-big">
        {capitalizeFirstLetter(startPoint)}
      </div>
    </Card>
  )
}

export default StartPointGenerator
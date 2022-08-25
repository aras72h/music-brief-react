import Card from '../shared/Card'
import CardTitle from '../shared/CardTitle'
import CardContent from '../shared/CardContent'
import { capitalizeFirstLetter } from '../../Functions'
import { IoIosRefresh } from 'react-icons/io'


function StartPointGenerator({ startPoint, refreshStartPoint }) {
  const handleRefresh = () => {
    refreshStartPoint()
  }

  return (
    <Card classNames={['starting-point']}>
      <CardTitle>
        <div>Starting Point</div>
        <div onClick={handleRefresh} className='refresh-icon'>
          <IoIosRefresh size={'1.44rem'} />
        </div>
      </CardTitle>
      <CardContent>
        <div className="text-big">
          {capitalizeFirstLetter(startPoint)}
        </div>
      </CardContent>
    </Card>
  )
}

export default StartPointGenerator
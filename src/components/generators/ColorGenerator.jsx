import Card from '../shared/Card'
import CardTitle from '../shared/CardTitle'
import CardContent from '../shared/CardContent'
import { capitalizeFirstLetter } from '../../Functions'
import { IoIosRefresh } from 'react-icons/io'


function ColorGenerator({ color, refreshColor }) {
  const handleRefresh = () => {
    refreshColor()
  }
  return (
    <Card classNames={['color']}>
      <CardTitle>
        <div>Color</div>
        <div onClick={handleRefresh} className='refresh-icon'>
          <IoIosRefresh size={'1.44rem'} />
        </div>
      </CardTitle>
      <CardContent>
        <div className="text-big">
          {capitalizeFirstLetter(color)}
        </div>
      </CardContent>
    </Card>
  )
}

export default ColorGenerator
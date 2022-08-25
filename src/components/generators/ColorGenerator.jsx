import Card from '../shared/Card'
import { capitalizeFirstLetter } from '../../Functions'
import { IoIosRefresh } from 'react-icons/io'


function ColorGenerator({ color, refreshColor }) {
  const handleRefresh = () => {
    refreshColor()
  }
  return (
    <Card classNames={['color']}>
      <div className="card-title">
        <div>Color</div>
        <div onClick={handleRefresh} className='refresh-icon'>
          <IoIosRefresh size={'1.44rem'} />
        </div>
      </div>
      <div className="card-content text-big">
        {capitalizeFirstLetter(color)}
      </div>
    </Card>
  )
}

export default ColorGenerator
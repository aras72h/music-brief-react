import Card from "../shared/Card"
import { IoIosRefresh } from 'react-icons/io'
import { capitalizeFirstLetter } from '../../Functions'

function TitleGenerator({ title, refreshTitle }) {
  const handleRefresh = () => {
    refreshTitle()
  }

  return (
    <Card classNames={['title']}>
      <div className="card-title">
        <div>Title</div>
        <div onClick={handleRefresh} className='refresh-icon'>
          <IoIosRefresh size={'1.44rem'} />
        </div>
      </div>
      <div className="card-content text-big">
        {capitalizeFirstLetter(title)}
      </div>
    </Card>
  )
}

export default TitleGenerator
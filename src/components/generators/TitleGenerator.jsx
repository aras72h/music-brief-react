import Card from "../shared/Card"
import CardTitle from '../shared/CardTitle'
import CardContent from '../shared/CardContent'
import { IoIosRefresh } from 'react-icons/io'
import { capitalizeFirstLetter } from '../../Functions'

function TitleGenerator({ title, refreshTitle }) {
  const handleRefresh = () => {
    refreshTitle()
  }

  return (
    <Card classNames={['title']}>
      <CardTitle>
        <div>Title</div>
        <div onClick={handleRefresh} className='refresh-icon'>
          <IoIosRefresh size={'1.44rem'} />
        </div>
      </CardTitle>
      <CardContent>
        <div className="text-big">
          {capitalizeFirstLetter(title)}
        </div>
      </CardContent>
    </Card>
  )
}

export default TitleGenerator
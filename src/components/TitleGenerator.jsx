import Card from "./shared/Card"
import { FiRefreshCcw } from 'react-icons/fi'
import { capitalizeFirstLetter } from '../Functions'

function TitleGenerator({ title, refreshTitle }) {
  const handleRefresh = () => {
    refreshTitle()
  }

  return (
    <Card>
      <span className="card-title">Title:</span>
      <span className="card-body">
        {capitalizeFirstLetter(title)}
        <div onClick={handleRefresh} className='refresh-icon'>
          <FiRefreshCcw />
        </div>
      </span>
    </Card>
  )
}

export default TitleGenerator
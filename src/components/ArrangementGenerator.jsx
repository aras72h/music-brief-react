import Card from './shared/Card'
import { IoIosRefresh } from 'react-icons/io'


function ArrangementGenerator({ arrangement, refreshArrangement }) {
  const handleRefresh = () => {
    refreshArrangement()
  }

  return (
    <Card classNames={['arrangement-section']}>
      <div className="card-title">
        <div>Form</div>
        <div onClick={handleRefresh} className='refresh-icon'>
          <IoIosRefresh size={'1.44rem'} />
        </div>
      </div>
      <div className="card-content">
        {arrangement}
      </div>
    </Card>
  )
}

export default ArrangementGenerator
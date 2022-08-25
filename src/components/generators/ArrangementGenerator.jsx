import Card from '../shared/Card'
import CardTitle from '../shared/CardTitle'
import CardContent from '../shared/CardContent'
import { IoIosRefresh } from 'react-icons/io'


function ArrangementGenerator({ arrangement, refreshArrangement }) {
  const handleRefresh = () => {
    refreshArrangement()
  }

  return (
    <Card classNames={['arrangement-section']}>
      <CardTitle>
        <div>Form</div>
        <div onClick={handleRefresh} className='refresh-icon'>
          <IoIosRefresh size={'1.44rem'} />
        </div>
      </CardTitle>
      <CardContent>
        {arrangement}
      </CardContent>
    </Card>
  )
}

export default ArrangementGenerator
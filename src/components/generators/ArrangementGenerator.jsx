import Card from '../shared/Card'
import CardTitle from '../shared/CardTitle'
import CardContent from '../shared/CardContent'
import ArrangementBox from './ArrangementBox'
import { IoIosRefresh } from 'react-icons/io'


function ArrangementGenerator({ arrangement, refreshArrangement }) {
  const handleRefresh = () => {
    refreshArrangement()
  }

  // console.log(arrangement)

  return (
    <Card classNames={['arrangement-section']}>
      <CardTitle>
        <div>Form</div>
        <div onClick={handleRefresh} className='refresh-icon'>
          <IoIosRefresh size={'1.44rem'} />
        </div>
      </CardTitle>
      <CardContent>
        <div className="arrangement">
          {
            arrangement.map((section, index) => <ArrangementBox key={`${section}-${index}`} name={section} />)
          }
        </div>
      </CardContent>
    </Card>
  )
}

export default ArrangementGenerator
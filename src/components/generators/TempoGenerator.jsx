import Card from '../shared/Card'
import CardTitle from '../shared/CardTitle'
import CardContent from '../shared/CardContent'
import { IoIosRefresh } from 'react-icons/io'


function TempoGenerator({ slowTempo, fastTempo, isFast, refreshTempo }) {
  let tempo = isFast ? fastTempo : slowTempo

  const handleRefresh = () => {
    refreshTempo()
  }

  return (
    <Card classNames={['tempo']}>
      <CardTitle>
        <div>Tempo</div>
        <div onClick={handleRefresh} className='refresh-icon'>
          <IoIosRefresh size={'1.44rem'} />
        </div>
      </CardTitle>
      <CardContent>
        <div className="text-big">
          {`${tempo} bpm`}
        </div>

        <div className="tempo-switch">
          <span>Slow</span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <span>Fast</span>
        </div>
      </CardContent>
    </Card>
  )
}

TempoGenerator.defaultProps = {
  isFast: false,
}

export default TempoGenerator
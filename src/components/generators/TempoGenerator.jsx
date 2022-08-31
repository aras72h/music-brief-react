import { useState } from 'react'
import Card from '../shared/Card'
import CardTitle from '../shared/CardTitle'
import CardContent from '../shared/CardContent'
import { IoIosRefresh } from 'react-icons/io'


function TempoGenerator({ slowTempo, fastTempo, refreshTempo }) {
  // let tempo = checked ? fastTempo : slowTempo

  const [checked, setChecked] = useState(false)

  const handleToggle = () => setChecked(!checked)

  const handleRefresh = () => refreshTempo()

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
          {`${checked ? fastTempo : slowTempo} bpm`}
        </div>

        <div className="tempo-switch">
          <span>Slow</span>
          <label className="switch">
            <input type="checkbox" checked={checked} onChange={handleToggle} />
            <span className="slider"></span>
          </label>
          <span>Fast</span>
        </div>
      </CardContent>
    </Card>
  )
}

export default TempoGenerator
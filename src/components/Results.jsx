import { useState } from 'react'
import TitleGenerator from './generators/TitleGenerator'
import ScaleGenerator from './generators/ScaleGenerator'
import TempoGenerator from './generators/TempoGenerator'
import ColorGenerator from './generators/ColorGenerator'
import ArrangementGenerator from './ArrangementGenerator'
import StartPointGenerator from './generators/StartPointGenerator'
import DeadlineGenerator from './generators/DeadlineGenerator'
import RandomData, { titleGenerator } from './RandomData'

function Results() {
  const [data, setData] = useState(RandomData)

  const refreshTitle = () => {
    const newTitle = titleGenerator()
    setData((prev) => {
      return {
        ...prev,
        title: newTitle,
      }
    })
  }

  const refreshScale = () => {
    console.log('scale refresh');
  }

  const refreshTempo = () => {
    console.log('tempo refresh');
  }

  const refreshColor = () => {
    console.log('color refresh')
  }

  const refreshArrangement = () => {
    console.log('form refresh');
  }

  const refreshStartPoint = () => {
    console.log('starting point refresh');
  }

  const refreshDeadline = () => {
    console.log('deadline refresh');
  }


  return (
    <>
      <TitleGenerator title={data.title} refreshTitle={refreshTitle} />
      <ScaleGenerator note={data.note} scale={data.scale} refreshScale={refreshScale} />
      <TempoGenerator slowTempo={data.slowTempo} fastTempo={data.fastTempo} refreshTempo={refreshTempo} />
      <ColorGenerator color={data.color} refreshColor={refreshColor} />
      <ArrangementGenerator arrangement={data.arrangement} refreshArrangement={refreshArrangement} />
      <StartPointGenerator startPoint={data.startPoint} refreshStartPoint={refreshStartPoint} />
      <DeadlineGenerator deadline={data.deadline} refreshDeadline={refreshDeadline} />
    </>
  )
}

export default Results
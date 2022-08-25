import { useState } from 'react'
import TitleGenerator from './generators/TitleGenerator'
import ScaleGenerator from './generators/ScaleGenerator'
import TempoGenerator from './generators/TempoGenerator'
import ColorGenerator from './generators/ColorGenerator'
import ArrangementGenerator from './generators/ArrangementGenerator'
import StartPointGenerator from './generators/StartPointGenerator'
import DeadlineGenerator from './generators/DeadlineGenerator'
import RandomData, { titleGenerator, colorGenerator, arrangementGenerator, tempoGenerator, scaleGenerator, startPointGenerator, deadlineGenerator } from './RandomData'

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
    const { note, scale } = scaleGenerator()
    setData((prev) => {
      return {
        ...prev,
        note,
        scale,
      }
    })
  }

  const refreshTempo = () => {
    const { slowTempo, fastTempo } = tempoGenerator()
    setData((prev) => {
      return {
        ...prev,
        slowTempo,
        fastTempo,
      }
    })

  }

  const refreshColor = () => {
    const newColor = colorGenerator()
    setData((prev) => {
      return {
        ...prev,
        color: newColor,
      }
    })
  }

  const refreshArrangement = () => {
    const newArrangement = arrangementGenerator()
    setData((prev) => {
      return {
        ...prev,
        arrangement: newArrangement,
      }
    })
  }

  const refreshStartPoint = () => {
    const newStartPoint = startPointGenerator()
    setData((prev) => {
      return {
        ...prev,
        startPoint: newStartPoint,
      }
    })
  }

  const refreshDeadline = () => {
    const newDeadline = deadlineGenerator()
    // console.log(newDeadline);
    setData((prev) => {
      return {
        ...prev,
        deadline: newDeadline,
      }
    })
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
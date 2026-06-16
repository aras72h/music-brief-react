import TitleGenerator from './generators/TitleGenerator'
import ScaleGenerator from './generators/ScaleGenerator'
import TempoGenerator from './generators/TempoGenerator'
import ColorGenerator from './generators/ColorGenerator'
import ArrangementGenerator from './generators/ArrangementGenerator'
import StartPointGenerator from './generators/StartPointGenerator'
import DeadlineGenerator from './generators/DeadlineGenerator'

function Results({
  data,
  refreshTitle,
  refreshScale,
  refreshTempo,
  refreshColor,
  refreshArrangement,
  refreshStartPoint,
  refreshDeadline,
}) {
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
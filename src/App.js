import { useState } from 'react'
import PdfGenerator from './components/PdfGenerator'
import Header from './components/Header'
import Footer from './components/Footer'
import Results from './components/Results'
import RandomData, { 
  titleGenerator, 
  colorGenerator, 
  arrangementGenerator, 
  tempoGenerator, 
  scaleGenerator, 
  startPointGenerator, 
  deadlineGenerator 
} from './components/RandomData'

function App() {
  const [data, setData] = useState(RandomData)

  const refreshTitle = () => {
    const newTitle = titleGenerator()
    setData((prev) => ({ ...prev, title: newTitle }))
  }

  const refreshScale = () => {
    const { note, scale } = scaleGenerator()
    setData((prev) => ({ ...prev, note, scale }))
  }

  const refreshTempo = () => {
    const { slowTempo, fastTempo } = tempoGenerator()
    setData((prev) => ({ ...prev, slowTempo, fastTempo }))
  }

  const refreshColor = () => {
    const newColor = colorGenerator()
    setData((prev) => ({ ...prev, color: newColor }))
  }

  const refreshArrangement = () => {
    const newArrangement = arrangementGenerator()
    setData((prev) => ({ ...prev, arrangement: newArrangement }))
  }

  const refreshStartPoint = () => {
    const newStartPoint = startPointGenerator()
    setData((prev) => ({ ...prev, startPoint: newStartPoint }))
  }

  const refreshDeadline = () => {
    const newDeadline = deadlineGenerator()
    setData((prev) => ({ ...prev, deadline: newDeadline }))
  }

  const refreshAll = () => {
    const newTitle = titleGenerator()
    const { note, scale } = scaleGenerator()
    const { slowTempo, fastTempo } = tempoGenerator()
    const newColor = colorGenerator()
    const newArrangement = arrangementGenerator()
    const newStartPoint = startPointGenerator()
    const newDeadline = deadlineGenerator()

    setData({
      title: newTitle,
      note,
      scale,
      slowTempo,
      fastTempo,
      color: newColor,
      arrangement: newArrangement,
      startPoint: newStartPoint,
      deadline: newDeadline,
    })
  }

  return (
    <>
      <Header refreshAll={refreshAll} />
      <main className='container'>
        <div className='wrapper' id='for-pdf'>
          <Results 
            data={data}
            refreshTitle={refreshTitle}
            refreshScale={refreshScale}
            refreshTempo={refreshTempo}
            refreshColor={refreshColor}
            refreshArrangement={refreshArrangement}
            refreshStartPoint={refreshStartPoint}
            refreshDeadline={refreshDeadline}
          />
        </div>
        <PdfGenerator />
      </main>
      <Footer />
    </>
  )
}

export default App
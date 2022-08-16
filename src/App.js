import { useState } from 'react'
import Header from './components/Header'
import TitleGenerator from './components/TitleGenerator'
import ColorGenerator from './components/ColorGenerator'
import ArrangementGenerator from './components/ArrangementGenerator'
import ScaleGenerator from './components/ScaleGenerator'
import StartPointGenerator from './components/StartPointGenerator'
import DeadlineGenerator from './components/DeadlineGenerator'
import PdfGenerator from './components/PdfGenerator'
import BpmGenerator from './components/BpmGenerator'
import RandomData, { titleGenerator } from './components/RandomData'

function App() {
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

  return (
    <>
      <Header />
      <div className='container'>
        <main>
          <div id='for-pdf'>
            <TitleGenerator title={data.title} refreshTitle={refreshTitle} />
            <ColorGenerator color={data.color} />
            <ArrangementGenerator arrangement={data.arrangement} />
            <BpmGenerator slowTempo={data.slowTempo} fastTempo={data.fastTempo} />
            <ScaleGenerator note={data.note} scale={data.scale} />
            <StartPointGenerator startPoint={data.startPoint} />
            <DeadlineGenerator deadline={data.deadline} />
          </div>
          <PdfGenerator />
        </main>
      </div>
    </>
  )
}

export default App
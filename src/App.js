import Header from './components/Header'
import TitleGenerator from './components/TitleGenerator'
import ColorGenerator from './components/ColorGenerator'
import ArrangementGenerator from './components/ArrangementGenerator'
import ScaleGenerator from './components/ScaleGenerator'
import StartPointGenerator from './components/StartPointGenerator'
import DeadlineGenerator from './components/DeadlineGenerator'
import PdfGenerator from './components/PdfGenerator'
import BpmGenerator from './components/BpmGenerator'

function App() {
  return (
    <div className='container'>
      <Header />
      <main>
        <div id='for-pdf'>
          <TitleGenerator />
          <ColorGenerator />
          <ArrangementGenerator />
          <BpmGenerator />
          <ScaleGenerator />
          <StartPointGenerator />
          <DeadlineGenerator />
        </div>
        <PdfGenerator />
      </main>
    </div>
  )
}

export default App
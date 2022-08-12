import Header from './components/Header'
import TitleGenerator from './components/TitleGenerator'
import ColorGenerator from './components/ColorGenerator'
import ArrangementGenerator from './components/ArrangementGenerator'
import ScaleGenerator from './components/ScaleGenerator'
import StartPointGenerator from './components/StartPointGenerator'
import DeadlineGenerator from './components/DeadlineGenerator'
import PdfGenerator from './components/PdfGenerator'

function App() {
  return (
    <>
      <main className='container'>
        <Header />
        <TitleGenerator />
        <ColorGenerator />
        <ArrangementGenerator />
        <ScaleGenerator />
        <StartPointGenerator />
        <DeadlineGenerator />
        <PdfGenerator />
      </main>
    </>
  )
}

export default App
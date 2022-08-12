import Header from './components/Header'
import TitleGenerator from './components/TitleGenerator'
import ColorGenerator from './components/ColorGenerator'
import ArrangementGenerator from './components/ArrangementGenerator'
import ScaleGenerator from './components/ScaleGenerator'
import StartPointGenerator from './components/StartPointGenerator'
import DeadlineGenerator from './components/DeadlineGenerator'

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
      </main>
    </>
  )
}

export default App
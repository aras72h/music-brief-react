import PdfGenerator from './components/PdfGenerator'
import Header from './components/Header'
import Footer from './components/Footer'
import Results from './components/Results'

function App() {
  return (
    <>
      <Header />
      <main className='container'>
        <div className='wrapper' id='for-pdf'>
          <Results />
        </div>
        <PdfGenerator />
      </main>
      <Footer />
    </>
  )
}

export default App
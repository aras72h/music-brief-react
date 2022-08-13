import Button from './shared/Button'
import html2pdf from 'html2pdf.js'

function generatePdf() {
  const element = document.getElementById('root')
  html2pdf(element)
}

function PdfGenerator() {
  return (
    <>
      <Button>
        <div onClick={generatePdf}>
          Download PDF
        </div>
      </Button>
    </>
  )
}

export default PdfGenerator
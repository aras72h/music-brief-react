import Button from './shared/Button'
import html2pdf from 'html2pdf.js'

function generatePdf() {
  const element = document.getElementById('for-pdf')
  html2pdf(element)
}

function PdfGenerator() {
  return (
    <Button onClick={generatePdf}>
      Download PDF
    </Button>
  )
}

export default PdfGenerator
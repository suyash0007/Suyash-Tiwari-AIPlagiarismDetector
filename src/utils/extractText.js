import * as pdfjsLib from 'pdfjs-dist'
import mammoth from 'mammoth'

pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs'

const extractText = async (file) => {
    if (file.type === 'application/pdf') {
      console.log('Extracting text from PDF');
      const arrayBuffer = await file.arrayBuffer()
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise
      let text = ''
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i)//selecting a single page
        const content = await page.getTextContent()//getting the text 
        text += content.items.map(item => item.str).join(' ') + '\n'
      }
      
      
      return text

    } else {
      const arrayBuffer = await file.arrayBuffer()
      const result = await mammoth.extractRawText({ arrayBuffer })
      
      
      return result.value
    }
  }
  export default extractText
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PlagiarismProvider } from './context/PlagiarismContext.jsx'

createRoot(document.getElementById('root')).render(
  <PlagiarismProvider>
    <App />
  </PlagiarismProvider>,
)

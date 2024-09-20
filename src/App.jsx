import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from "./pages/Home"
import PlagirismDetector from "./pages/PlagiarismDetector"



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="detector" element={<PlagirismDetector />} />
        </Route>
      </Routes>
    </Router>


  )
}

export default App

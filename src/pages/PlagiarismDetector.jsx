import React from 'react'
import FileUpload from '../components/sections/fileUpload'
import PlagiarismResult from '@/components/sections/PlagiarismResult'

function PlagirismDetector() {
  return (
    <div>
      <FileUpload/>
      <PlagiarismResult/>
    </div>
  )
}

export default PlagirismDetector
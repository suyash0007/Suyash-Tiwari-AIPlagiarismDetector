import React from 'react'
import FileUpload from '@/components/sections/FileUpload'
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

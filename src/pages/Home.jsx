import Benifits from '@/components/sections/Benifits'
import Hero from '@/components/sections/Hero'
import React from 'react'

function Home() {
  return (
    <div>
      <Hero/>
      <Benifits/>
    </div>
  )
}

export default React.memo(Home)
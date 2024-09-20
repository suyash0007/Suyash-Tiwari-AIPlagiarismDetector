import React from 'react'
import Header from './Header'
import {  Outlet } from 'react-router-dom'
import Footer from './Footer'
//Layout file for consistent UI
function Layout() {
  return (
    <div>
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet/>
      </main>
      <Footer />
    </div>
  </div>
  )
}

export default Layout
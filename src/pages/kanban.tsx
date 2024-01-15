import '../app/globals.css'
import React from 'react'
import Kanban from '@/components/Kanban'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

function kanban() {
  return (
    <div>
      <Nav/>
      <Kanban/>
      <Footer/>
    </div>
  )
}

export default kanban
"use client"
import React from 'react'
import Navbar from '../components/navbar/navbar'

interface DashboardLayoutProps{
    children:React.ReactNode
}

const DashboardLayout:React.FC<DashboardLayoutProps> = (props) => {
  return (

    <div>
      <Navbar/>
      {props.children}
      </div>
  )
}

export default DashboardLayout
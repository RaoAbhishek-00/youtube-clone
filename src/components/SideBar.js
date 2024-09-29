import React from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {
  const ismenuOpen = useSelector((store) => store.app.isMenuOpen)
  
  if(!ismenuOpen) return null;
    
  return (
    <div className='w-48 shadow-lg'>SideBar</div>
  )
}

export default SideBar
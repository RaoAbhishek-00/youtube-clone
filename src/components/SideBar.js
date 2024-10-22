import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideBar = () => {
  const ismenuOpen = useSelector((store) => store.app.isMenuOpen)
  
  if(!ismenuOpen) return null;
    
  return (
    <div className='w-48 shadow-lg'>
      <ul>
        <li className='w-32'><Link to="/">Home</Link></li>
      </ul>
    </div>
  )
}

export default SideBar
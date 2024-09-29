import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closemenu } from '../utils/appSlice';

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(closemenu());
  },[])
  return (
    <div>WatchPage</div>
  )
}

export default WatchPage
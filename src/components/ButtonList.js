import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex'>
        <Button name="All"/>
        <Button name="game"/>
        <Button name="sports"/>
        <Button name="news"/>
    </div>
  )
}

export default ButtonList
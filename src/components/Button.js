import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className=' p-2 m-2 bg-gray-500 rounded-lg'>
            {name}
        </button>
    </div>
  )
}

export default Button
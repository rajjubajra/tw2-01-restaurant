import React from 'react'

function DishTitle({title, brief}) {
  return (
    <div className="w-full text-center mt-10 mb-5">
      <h2 className="text-3xl">{title}</h2>
      <p>{brief}</p>
    </div>
  )
}

export default DishTitle

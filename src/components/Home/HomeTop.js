import React from 'react'

function HomeTop() {
  return (
    <div className="relative">
      <div className="h-screen">
        <img className="w-full h-screen object-cover" src="../data/images/spices-370114_1280.jpg" alt="test"/>
      </div>
      <div className="w-full h-screen flex justify-center items-center absolute top-0 text-center">
        <h1 className="text-8xl text-gray-200 leading-normal">Asian <br/> Cuisine</h1>
      </div>
    </div>
  )
}

export default HomeTop

import React from 'react'

function DishTitle({title, brief}) {

  function CreateMarkUp(text){
    return {__html: text}
  }
  return (
    <div className="w-full text-center mt-10 mb-5">
      <h2 className="text-3xl">{title}</h2>
      <div dangerouslySetInnerHTML={CreateMarkUp(brief)} />
    </div>
  )
}

export default DishTitle

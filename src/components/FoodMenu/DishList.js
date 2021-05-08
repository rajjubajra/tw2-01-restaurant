import React from 'react'

function DishList({dishList}) {


  function createMarkup(text){
    return {__html: text}
  }

  return (
    <div className="grid lg:grid-cols-2">
      {
        dishList.length > 0 &&
        dishList.map((item,index)=>{
          return <div key={index}>
          <div  className="p-8 grid lg:grid-cols-3">
            <h2 className="text-3xl lg:col-span-2">{item.title}</h2>
            <div className="my-2 lg:col-span-2 text-sm" dangerouslySetInnerHTML={createMarkup(item.field_food_menu_item)} />
            <div className="lg:flex lg:justify-end lg:items-end">
              <div>{item.field_rate}</div>
            </div>
          </div>
          </div>
        })
      }
      
    </div>
  )
}

export default DishList

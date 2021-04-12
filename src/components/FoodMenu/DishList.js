import React from 'react'

function DishList({dishList}) {



  return (
    <div className="grid lg:grid-cols-2">
      {
        dishList.length > 0 &&
        dishList.map(item=>{
          return <div key={item.id}>
          <div  className="p-8 grid lg:grid-cols-3">
            <h2 className="text-3xl lg:col-span-2">{item.title}</h2>
            <p className="my-2 lg:col-span-2 text-sm">{item.menuBrief}</p>
            <div className="lg:flex lg:justify-end lg:items-end">
              <div>£ {item.rate}</div>
              
            </div>
          </div>
          </div>
        })
      }
      
    </div>
  )
}

export default DishList

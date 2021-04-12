import {useEffect, useState} from 'react';
import axios from 'axios';
import DishTitle from './DishTitle';
import DishList from './DishList';


function FoodMenuItems() {

  const [foodmenu, setFoodMenu] = useState([]);

  useEffect(()=>{
    axios.get('./data/data.json')
    .then(res => setFoodMenu(res.data.foodMenu))
    .catch(err => console.log(err))
  },[])

  console.log(foodmenu);

  return (
    <>
    <div className="w-full">
      <img className="w-full h-36 object-cover object-center" src="../../data/images/spices-370114_1280.jpg" alt="test" />
    </div>
    <div className="container m-auto md:px-20">
      {
        foodmenu.length > 0 &&
        foodmenu.map((item, index)=>{
          return (<div key={index}>
            <DishTitle title={item.dishTitle} brief={item.dishBrief} />
            <DishList dishList={item.dishesTypes} />
            </div>
          );
        })

      }
      
    </div>
    </>
  )
}

export default FoodMenuItems

import {useEffect, useState} from 'react';
import DishTitle from './DishTitle';
import DishList from './DishList';
import {useSelector} from 'react-redux';


function FoodMenuItems() {

  const Food_menu_data = useSelector(state=>state.reducerFoodMenu.food_menu_data);
  const Txn_term_data = useSelector(state=>state.reducerFoodMenuTxnTerm.food_menu_txn_term_data);
  const Food_menu_bg = useSelector(state=>state.reducerFoodMenuBg.food_menu_bg_data);



  //console.log(Food_menu_data);
  
  const [data, setData] = useState([]);

  useEffect(()=>{
    
    const result = Txn_term_data && Txn_term_data.slice();
    const data2 = Food_menu_data && Food_menu_data.slice();
    //loop through copy
    result.forEach(resultObject => {
      //add menu property on each object in copy
      resultObject.menu = [];

      data2.forEach(d2Object => {
        //only include from data2 if tid is matched
        if(d2Object.field_food_menu_type_1 === resultObject.tid){

          //use destructuring to get local copies of Food_menu_data's obj props
          const {title, field_food_menu_item, field_rate} = d2Object;

          //make new object useing these value and adds it to current menu
          resultObject.menu.push({title, field_food_menu_item, field_rate});
        }
      })
    })

    setData(result);
    
  },[Food_menu_data, Txn_term_data])

  console.log(Food_menu_bg);

  return (
    <>
    <div className="w-full">
      <img 
      className="w-full h-36 object-cover object-center" 
      src={Food_menu_bg.length > 0 && Food_menu_bg[0].field_food_menu_bg_image} alt="test" />
    </div>
    <div className="container m-auto md:px-20">
      {
        data.length > 0 &&
        data.map((item,index) => {
          return <div key={index}>
          <DishTitle title={item.name} brief={item.description__value} />
          <DishList dishList={item.menu} />
          </div>
        })
      } 
    </div>
    </>
  )
}
export default FoodMenuItems
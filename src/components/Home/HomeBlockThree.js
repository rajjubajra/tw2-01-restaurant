//import {Link} from 'react-router-dom';
import HomeCard from './HomeCard';


function HomeBlockThree({data}) {


  return (
    
    <div className="container m-auto my-20 flex flex-wrap justify-center">
      <HomeCard 
        text={data[0].field_home_block_3_col_1_text} 
        image={data[0].field_home_block_3_col_1_image} />

      <HomeCard 
        text={data[0].field_home_block_3_col_2_text} 
        image={data[0].field_home_block_3_col_2_image} />

      <HomeCard 
        text={data[0].field_home_block_3_col_3_text} 
        image={data[0].field_home_block_3_col_3_image} />
      
    </div>  
    
  )
}

export default HomeBlockThree
import HomeTop from "../components/Home/HomeTop";
import HomeMiddle from "../components/Home/HomeMiddle";
import HomeBlockThree from "../components/Home/HomeBlockThree";
import HomeBlockFour from '../components/Home/HomeBlockFour';
import {useSelector} from 'react-redux';
import Loading from '../components/Loading';



function Home() {

  const data = useSelector(state=>state.reducerHomePage.home_data);

  return (
    data.length > 0 ?
    <div className="relative">
      <HomeTop data={data} />
      <HomeMiddle data={data} />
      <HomeBlockThree data={data} />  
      <HomeBlockFour data={data} />    
    </div>
    : <Loading />
  )
}

export default Home
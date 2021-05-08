import Home from './pages/Home';
import About from './pages/About';
import TableBooking from './pages/TableBooking';
import FoodMenu from './pages/FoodMenu';
import Gallery from './pages/Gallery';
import Location from './pages/Location';
import MenuBar from './components/MainMenu/MenuBar';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { actionMainNav } from './Redux/Action';


function Router() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(actionMainNav());
  },[dispatch]);

  
  return (
    <BrowserRouter>
      <MenuBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/table-booking" component={TableBooking} />
        <Route path="/menu" component={FoodMenu} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/location" component={Location} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Router

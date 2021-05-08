import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { baseurl } from '../../config/baseurl';



function Footer() {

  const [menudata, setMenuData] = useState([]);
  //const [mobileMenu, setMobileMenu] = useState(false);

  /**
   * Install Module used
   * https://www.drupal.org/project/rest_menu_items
   * 
   * Set Permission : Access GET on Menu items per menu resource
   * Enable : Rest UI : Rest Menu Item to GET 
   * 
   */
  const fetchData = (URL)=>{
      axios({
      method: 'GET',
      url: URL,
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/api+json'
      }
    })
    .then(res => {setMenuData(res.data)})
    .catch(err=>console.log(err));
  } 

  /**
   * if npm run on localhost:3000
   * fetch data from local json file.
   */
  const local = './data/mainnav.json';
  const remote = `${baseurl.URL}/api/menu_items/main`;

  useEffect(()=>{
    
    const dataurl = window.location.origin === 'http://localhost:3000' 
                    ? local
                    : remote;

    fetchData(dataurl);

  },[remote, local])


  //console.log(menudata);



  return (
    <div className="container m-auto flex justify-center my-10 divide-y border-t pt-5 ">
    
    <ul className="flex">
      {
        menudata.length > 0 &&
        menudata.map(item=>{
          return <li key={item.key} className="mx-2 text-sm">
              <Link to={item.uri.replace('base:','')}>{item.title}</Link>
            </li>
        })
      }
      </ul>
    </div>
  )
}

export default Footer

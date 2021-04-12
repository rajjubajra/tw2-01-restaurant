import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';


function MainMenu({showHideNav}) {

  const [mainNav, setMainNav]= useState([]);
  
  useEffect(()=>{
    axios.get('./data/data.json')
    .then(res=>{
      //console.log(res.data);
      setMainNav(res.data.MainNav);
    })
    .catch(error=> console.log(error))
  },[]);


  return (
    <div className="grid gap-2 md:flex font-thin text-sm">
    {
        mainNav.length > 0 &&
        mainNav.map(item=>{
          return <div key={item.id}>
            <Link exact="true" 
            to={item.link}
            onClick={showHideNav}
            className="px-3 py-2">
              {item.name}
            </Link>
          </div>
        })
    }
    </div>
  )
}

export default MainMenu
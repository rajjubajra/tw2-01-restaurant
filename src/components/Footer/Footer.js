import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';



function Footer() {

  const [footerMenu, setFooterMenu] = useState([]);

  useEffect(()=>{
    axios.get('./data/data.json')
    .then(res=>{
      //console.log(res.data);
      setFooterMenu(res.data.MainNav);
    })
    .catch(error=> console.log(error))
  },[])

  console.log(footerMenu);

  return (
    <div className="container m-auto flex justify-center my-10 divide-y border-t pt-5 ">
    
    <ul className="flex">
      {
        footerMenu.length > 0 &&
        footerMenu.map(item=>{
          return <li key={item.id} className="mx-2 text-sm">
              <Link to={item.link}>{item.name}</Link>
            </li>
        })
      }
      </ul>
    </div>
  )
}

export default Footer

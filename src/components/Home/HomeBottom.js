import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';


function HomeBottom() {
  const [homeBottom, setHomeBottom] = useState([]);

  useEffect(()=>{
    axios.get('./data/data.json')
    .then(res => setHomeBottom(res.data.homeBottom))
    .catch(err => console.log("Error: ", err))
  },[])

  //console.log(homeBottom);

  return (
    <>
    <div className="container m-auto my-20 flex flex-wrap justify-center">
      <div className="lg:w-80 px-4">
        <img className="object-cover h-40 w-full" src="./data/images/garlic-3617113_640.jpg" alt="test" />
        <div className="py-8">
          <h3 className="text-2xl uppercase py-5">Dolor sit amet</h3>
          <p>Dolor sit amet consectetur adipisicing elit. Amet quidem officia quam, harum consequatur vel dolor quia sunt nesciunt, temporibus molestiae suscipit placeat enim voluptatum blanditiis laborum voluptate ea aperiam.</p>
          <br/>
          <p>Praesentium, quia enim sunt laborum hic a exercitationem eum temporibus quaerat facere veritatis sequi voluptatem placeat architecto magnam accusantium cupiditate corporis!</p>
        </div>
      </div>
      <div  className="lg:w-80 px-4">
        <img className="object-cover h-40 w-full" src="./data/images/ginger-1738098_640.jpg" alt="test" />
        <div  className="py-8">
          <h3 className="text-2xl uppercase py-5">Lorem ipsum</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas modi excepturi necessitatibus, soluta reiciendis non dolorum exercitationem distinctio maxime voluptas veniam nihil qui nesciunt omnis ipsa voluptates alias dicta quis!</p>
          <br/>
          <p>Dignissimos praesentium, quia enim sunt laborum hic a exercitationem eum temporibus quaerat facere veritatis sequi voluptatem placeat architecto magnam accusantium cupiditate corporis!</p>
        </div>
      </div>
      <div  className="lg:w-80 px-4">
        <img className="object-cover h-40 w-full" src="./data/images/turmeric-3251560_640.jpg" alt="test" />
        <div  className="py-8">
          <h3 className="text-2xl uppercase py-5">Adipisicing elit</h3>
          <p>Adipisicing elit. Dignissimos praesentium, quia enim sunt laborum hic a exercitationem eum temporibus quaerat facere veritatis sequi voluptatem placeat architecto magnam accusantium cupiditate corporis!</p>
          <br/>
          <p>Cupiditate corporis adipisicing elit. Dignissimos praesentium, quia enim sunt laborum hic a exercitationem eum temporibus quaerat facere veritatis sequi voluptatem placeat architecto magnam accusantium cupiditate corporis!</p>
        </div>
      </div>
    </div>
    <div className="container m-auto flex justify-center my-20">
      <Link to="food-menu" className="px-10 py-2 border hover:bg-gray-300">View Menu</Link>
    </div>
    <div className="container m-auto my-20">
      <img className="w-full lg:px-60" src="./data/images/chef-4625935_1280.jpg" alt="test" />
    </div>
    </>
  )
}

export default HomeBottom

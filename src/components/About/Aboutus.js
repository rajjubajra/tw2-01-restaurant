import PageTitle from '../PageTitle';

function Aboutus() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-20">
      <div className="px-20 w-full">
        <PageTitle title="About us" />
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:p-20 p-5 order-2 md:order-1">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam placeat repudiandae sunt facere eum perferendis numquam molestias, atque adipisci laborum consequuntur dolorem quos neque, nesciunt vel minima distinctio rerum dolorum.</p>
          <br />
          <p>Dolor sit, amet consectetur adipisicing elit. Impedit fugit fugiat iste nisi similique vero, odio pariatur et. Voluptatibus quam nulla excepturi eaque, veritatis architecto culpa quisquam laudantium aspernatur.</p>
        </div>
        <div className="order-1 md:order-2 my-10 md:my-0">
          <img className="object-cover h-32 w-10/12 m-auto lg:h-auto lg:w-full md:h-full" src='./data/images/kitchen-731351_1280.jpg' alt="test" />
        </div>
      </div>
    </div>
  )
}

export default Aboutus
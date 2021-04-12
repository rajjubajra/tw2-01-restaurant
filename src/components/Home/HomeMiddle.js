import PageTitle from '../PageTitle';

function HomeMiddle() {
  return (
    <div>

      <div className="w-full min-h-48 flex justify-center items-center flex-col py-20 md:px-20">

        <div className="py-5">
          <PageTitle title="Ipsum dolor sit" />
        </div>
        
        <div className="md:w-1/2 w-2/3">
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Maxime mollitia, molestiae quas vel sint commodi repudiandae consequunt voluptat laborum numquam blanditiis harum.
          </p>
        </div>
      </div>
      <img className="w-full h-96 object-cover" src="./data/images/table-3665144_1280.jpg" alt="test" />
    </div>
  );
}

export default HomeMiddle

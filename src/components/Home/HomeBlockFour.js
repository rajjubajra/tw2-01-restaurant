

function HomeBlockFour({data}) {

  return (
    <div className="container m-auto my-20">
      <img 
        className="w-full lg:px-60" 
        src={data[0].field_home_block_4_image}
        alt="test" />
    </div>
  );
}
export default HomeBlockFour
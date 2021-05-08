

function HomeMiddle({data}) {


  function createMarkup(text){
    return {__html: text}
  }


  return (
    <div>
      <div className="w-full min-h-48 flex justify-center items-center flex-col py-20 md:px-20">

      <div 
        className="md:w-1/2 w-2/3" 
        dangerouslySetInnerHTML={createMarkup(data[0].field_home_block_2_text)} />
      </div>

      <img 
      className="w-full h-96 object-cover" 
      src={data[0].field_home_block_2_image} 
      alt="test" />

    </div>

  );
}

export default HomeMiddle
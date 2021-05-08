
function HomeTop({data}) {

  function CreateMarkup(text){
    return {__html: text}
  }

  return (
    <div className="relative">
      <div className="h-screen">
          <img 
              className="w-full h-screen object-cover" 
              src={data[0].field_home_block_1_image} 
              alt="test"/>
      </div>
      
      <div className="w-full h-screen flex justify-center items-center absolute top-0 text-center">
      
      <div 
        className="text-8xl text-gray-200 leading-normal"
        dangerouslySetInnerHTML={CreateMarkup(data[0].field_home_block_1_text)} />
        
      </div>
    </div>
  )
}

export default HomeTop
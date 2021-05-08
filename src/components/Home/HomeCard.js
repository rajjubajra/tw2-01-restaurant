

function HomeCard({image, text}) {


  function CreateMarkup(text){
    return {__html: text}
  }
  
  return (
    <div className="lg:w-80 px-4">
        <img 
        className="object-cover h-40 w-full" 
        src={image} alt="test" />
        <div className="py-8">
          <div dangerouslySetInnerHTML={CreateMarkup(text)} />
        </div>
    </div>
  )
}

export default HomeCard

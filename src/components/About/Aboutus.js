import PageTitle from '../PageTitle';
import {useSelector} from 'react-redux';


function Aboutus() {

  const about_data = useSelector(state => state.reducerAboutPage.about_data);

  function createMarkup(text){
    return {__html: text}
  }

  return (
    about_data.length > 0 &&

    <div className="min-h-screen flex flex-col justify-center items-center py-20">
      <div className="px-20 w-full">
        <PageTitle title={about_data[0].title} />
      </div>
      <div className="flex flex-col md:flex-row">

          <div 
          className="md:p-20 p-5 order-2 md:order-1"
          dangerouslySetInnerHTML={createMarkup(about_data[0].field_about_page_text)} />
        
        <div className="order-1 md:order-2 my-10 md:my-0">
          <img 
          className="object-cover h-32 w-10/12 m-auto lg:h-auto lg:w-full md:h-full" src={about_data[0].field_about_page_image} 
          alt="test" />
        </div>
      </div>
    </div>
  )
}

export default Aboutus
import PageSubTitle from '../PageSubTitle';

function Address() {
  return (

    <div className="lg:w-1/2 md:w-2/3 divide-y divide-black mb-5">
    
    <div className="mb-5">
      <PageSubTitle subtitle="Address" />
    </div>
      
    <div className="grid grid-cols-2 text-sm">

          <div className="w-full flex justify-center mt-5">
            <ul>
              <li>900 Road Name</li>
              <li>Name Street</li>
              <li>Town</li>
              <li>Post Code</li>
              <li>Country</li>
            </ul>
          </div>
          
          <div className="w-full flex justify-center mt-5">
            <ul>
              <li>Tel: 00 0000 00000 00</li>
            </ul>
          </div>
      </div>
      
    </div>
  )
}

export default Address

import PageSubTitle from '../PageSubTitle';

function OpeningTime() {
  return (
    <div className="md:2/3 lg:w-1/2  m-auto">
    <div className="w-full text-center my-10">
      <PageSubTitle subtitle="Opening Time" />
    </div>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
        <li className="flex flex-col justify-center items-center p-10 border"><span>Monday:</span><span>5pm - 10pm</span></li>
        <li className="flex flex-col justify-center items-center p-10 border"><span>Tuesday:</span><span>5pm - 10pm</span></li>
        <li className="flex flex-col justify-center items-center p-10 border"><span>Wednesday:</span><span>5pm - 10pm</span></li>
        <li className="flex flex-col justify-center items-center p-10 border"><span>Thurday:</span><span>5pm - 10pm</span></li>
        <li className="flex flex-col justify-center items-center p-10 border"><span>Friday:</span><span>5pm - 10pm</span></li>
        <li className="flex flex-col justify-center items-center p-10 border"><span>Saturday:</span><span>3pm - 10pm</span></li>
        <li className="flex flex-col justify-center items-center p-10 border col-span-3"><span>Sunday:</span><span>3pm - 10pm</span></li>
      </ul>
    </div>
  )
}

export default OpeningTime

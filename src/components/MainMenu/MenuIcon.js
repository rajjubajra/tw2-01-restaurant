
function MenuIcon({crossed}) {

  //const [crossed, setCrossed] = useState(false);

  return (
    <div className="cursor-pointer p-5">
      
      <div className={`${crossed ? "hidden" : ""}`}>
        <div className="w-6 h-1 bg-gray-500"></div>
        <div className="w-6 h-1 bg-gray-500 my-1"></div>
        <div className="w-6 h-1 bg-gray-500"></div>
      </div>
      
      <div className={`${crossed ? "" : "hidden"}`}>
        <div>
          <div className="w-6 h-1 bg-gray-500 transform rotate-45 relative top-2"></div>
          <div className="w-6 h-1 bg-gray-500 transform -rotate-45 relative top-1"></div>
        </div>
      </div>
      
    </div>
  );
}

export default MenuIcon
import {useState} from 'react';
import CartAndUserIcon from './CartAndUserIcon';
import Logo from './Logo';
import MainMenu from "./MainMenu";
import MenuIcon from './MenuIcon';
import SearchIcon from './SearchIcon';



function MenuBar() {

  const [mobileMenu, setMobileMenu] = useState(false);

  function showHideNav(){
    return mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <>
{/** ROW - 1 */}
      <div className="flex bg-gray-900 text-gray-100">
        {/** MENU ICON */}
        <div className="flex flex-col w-28 md:w-full md:order-2">
            <div className="md:hidden">
              <div className="flex relative">
                <div onClick={showHideNav} >
                  <MenuIcon crossed={mobileMenu} />
                </div>
                <div className="relative top-5">
                  <SearchIcon />
                </div>   
              </div>
            </div>
            <div className="hidden md:block md:py-5">
            <MainMenu />
            </div>
        </div>
        {/** BRAND LOGO */}
        <div className="flex justify-center w-full md:w-28 md:order-1">
          <Logo />     
        </div>
        {/** CART AND USER ICON */}
        <div className="w-28 md:order-3">
          <CartAndUserIcon />
        </div>
      </div>   
{/** ROW-2 */}  
      <div className={`${mobileMenu ? 'flex py-5 md:hidden' : 'hidden'}`}>
          <MainMenu showHideNav={showHideNav} />
      </div> 
    </>
  )
}

export default MenuBar

import React,{useContext,useState} from 'react'
import LeftNavMenuItem from './LeftNavMenuItem'
import { useNavigate } from 'react-router-dom'
import {categories} from '../utils/constants'
import { Context } from '../Context/contextApi'


const LeftNav = () => {
  const {SelectCategories,setSelectCategories,MobileMenu} = useContext(Context);
  const navigate = useNavigate();
  const clickHandler = (name,type) =>{
   switch (type) {
    case "category":
      return setSelectCategories(name)
      case "home":
      return  setSelectCategories(name)
      case "menu":
      return  false;
    default:
      break;
   }
  }
 const [Menu,setMenu] = useState(true);
  const HideLeftmenu = () =>{
    setMenu(false)
  }
  return (
    <div
        className={`md:block w-[350px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all bottom-0 ${
            MobileMenu ? "translate-x-[0.2vw]" : "translate-x-[-555vw]"
        }`}
    >
            <div className="flex px-5 flex-col">
                {categories.map((item) => {
                    return (
                        <React.Fragment key={item.name}>
                            <LeftNavMenuItem 
                                text={item?.type === "home" ? "Home" : item.name}
                                icon={item?.icon}
                                action={() => {
                                    clickHandler(item?.name, item?.type);
                                    navigate("/")
                                    HideLeftmenu()
                                }}                                
                                className={`${
                                  SelectCategories === item.name
                                        ? "bg-white/[0.15]"
                                        : ""
                                }`}
                                
                            />
                            {item.divider && (
                                <hr className="my-5 border-white/[0.2]" />
                            )}
                        </React.Fragment>
                    );
                })}
                <hr className="my-5 border-white/[0.2]" />
                <div className="text-white/[0.5] text-[12px]">
                    Clone by: Rajan 
                </div>
            </div>
        </div>
  )
}

export default LeftNav

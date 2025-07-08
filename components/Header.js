import { useContext, useState } from "react";
import {ThemeColor} from "@/pages/theme_context";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
const { theme, ToggleFunc } =useContext(ThemeColor)


  return (
    <div className={theme === "Light" ? "   bg-[#FF6D00] to-headerColor relative  h-[100px] text-white flex  justify-between  " :
        "   bg-black  h-[100px] text-white flex  justify-between relative "
        }>
          <div className="flex justify-start gap-8">
            <div
        
              className="flex justify-start items-start gap-6"
            >
              <div className="text-white mt-3  font-semibold sm:text-[14px] text-[12px] flex gap-1 cursor-pointer ">
                <img
                  className="h-[100px] w-[100px] object-contain -mt-2 "
                  src="/logo.png"
                />
              </div>
            </div>
        
          </div>

          <div className="flex  items-center pl-3 gap-4">
 <div
        
              className="flex justify-start items-start gap-6"
            >
              <div className="text-white mt-3  font-semibold sm:text-[14px] text-[12px] flex gap-1 cursor-pointer ">
                <img
                  className="h-[100px] w-[100px] object-contain -mt-2 "
                  src="/shopping-cart.png"
                />
              </div>
            </div>

                  <div  className="flex flex-col items-center pl-3 mt-12">
                {theme === "Light"
                  ?
                  <div className=" bg-white   text-[14px] font-semibold items-end justify-end flex h-[25px] rounded-md w-7 border  border-white" >
             
                  <div  onClick={ToggleFunc} className="cursor-pointer mt-[1px]    text-[14px] font-semibold items-end justify-end flex h-6 rounded-md w-5 bg-black border border-white ">
                    
             </div>
                  </div>
                  :
                   <div  className=" bg-white    text-[14px] font-semibold items-end justify-start flex h-[25px] rounded-md w-7 border  border-white">
             
                  <div  onClick={ToggleFunc} className="cursor-pointer mt-[1px]  text-[14px] font-semibold items-end justify-start flex h-6 rounded-md w-5 bg-[#FF6D00] to-headerColor border border-white  ">
                    
             </div>
                  </div> 
                
                }

              </div>
                <div className="flex flex-col items-center mt-2">
                  <div
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                    className="relative inline-block"
                  >
                    <div className="flex justify-center items-center   cursor-pointer mt-3 font-semibold text-[12px] ">
                      <button className="text-center pr-1">User Name</button>
                    </div>
                  
                  </div>
                  <div className="text-white font-semibold text-[14px] pr-1 mt-2">
                    <div
                    
                      onClick={() => setOpen(true)}
                      className="w-8 h-8 cursor-pointer"
                    >
                      <img src="/power-off.png" />
                      {/*  <p className="text-[14px]">Logout</p> */}
                    </div>
                  </div>
                </div>
              </div>
      
    </div>
  )
}

export default Header

import React from "react";
import Button from "./Button";
import Prueba from "./Prueba";

 const Navbar = () => {
   return(
      <>
   <div className=" flex justify-between text-gray-300 bg-gray-700 py-3 sticky top-0">

       < span className="ml-2 mt-2 mb-2 focus: text-white">Start Tailwind</span>
        <ul class="flex  gap-3 mr-2 mt-2">

        <button className="flex gap-3">
      
        <div className="sm:hidden"><Prueba/></div>
          <div className="max-sm:hidden flex gap-3 ">
          
          <a className=" rounded  focus:text-white "href="#"><li>Home</li></a> 
           <a className="hover:bg-yellow-300 rounded" href="#"><li>About</li></a> 
           <a className="hover:bg-yellow-300 rounded" href="#"><li>Service</li></a> 
           <a  className="hover:bg-yellow-300 rounded " href="#"><li>Contact</li></a> 
          </div>
         
       </button>
        
           
    </ul>
    </div>
    </>
   )
}

export default Navbar;
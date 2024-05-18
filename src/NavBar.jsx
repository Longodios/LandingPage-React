import React from "react";

 const Navbar = () => {
   return(
   <div className=" flex justify-between text-gray-300 bg-black py-3 sticky top-0">
       
       < span className="ml-2 mt-2 mb-2 focus: text-white">Start Tailwind</span>
        <ul class="flex  gap-3 mr-2 mt-2">

        <button className="flex gap-3 lg:hidden">
       <svg class="h-6 w-6 fill-current lg:hidden" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
          <div className="lg:hidden">
          <a className=" rounded  focus:text-white "href="#"><li>Home</li></a> 
           <a className="hover:bg-yellow-300 rounded" href="#"><li>About</li></a> 
           <a className="hover:bg-yellow-300 rounded" href="#"><li>Service</li></a> 
           <a  className="hover:bg-yellow-300 rounded " href="#"><li>Contact</li></a> 
          </div>
         
       </button>
        
           
    </ul>
    </div>
   )
}

export default Navbar;
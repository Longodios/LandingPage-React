import React from "react";

const Card = () => {
    return (
        
        <div className=" m-5 border-4  ">
            <div >
            <img className="rounded-t-xl sm:size-full" src="src/assets/500.jpg"></img>
            </div>
               
                <h3 className="text-xl font-bold my-3">Card Title</h3>
                <p className="my-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, voluptate, numquam minus nobis fuga qui</p>
            
            <div className="text-center px-2 border-t-2">
            <button type="button" className="bg-blue-400 p-3 rounded mt-2">Find out More!</button>
            </div>
            </div>
        
    )   
}

export default Card;
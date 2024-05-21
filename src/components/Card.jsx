import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
    return (
        
        <div className=" m-5 mt-20">
            <div className="">
            <img className="rounded-t object-cover h-48 size-full" src={props.PropImage}></img>
            </div>
               
                <h3 className="text-xl font-bold my-3 max-sm:text-center">{props.PropTitle}</h3>
                <p className="my-5 max-sm:text-center">{props.PropText}</p>
            
            <div className="text-center px-2 border-t-2">
            <button type="button" className="bg-blue-400 p-3 rounded mt-2">Find out More!</button>
            </div>
            </div>
        
    )   
}

export default Card;

Card.propTypes = {
    PropImage: PropTypes.string,
    PropText: PropTypes.string,
    PropTitle: PropTypes.string
}

Card.defaultProps = {
    PropImage : "../src/assets/500.jpg",
    PropTitle: "This is a default Title!"
    
}
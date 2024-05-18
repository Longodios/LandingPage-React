import React from "react";
import Card from "./Card";

const GroupCards = () => {
    return (
        <>
        <div className=" mx-16 grid md:grid-cols-2 lg:grid-cols-4 lg:text-center ">
        <Card/>
        <Card/>
        <Card/>
        <Card/> 
        </div>
        
        </>
         
    )
}

export default GroupCards;
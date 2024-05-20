import React from "react";
import Card from "./Card";

const GroupCards = () => {
    const Bull = "../src/assets/Bull Terrier Miniature1.jpg"
    const pruebaImagen2 = "../src/assets/500.jpg";
    const paisaje = "../src/assets/paisaje.avif";
    return(
        <>

        <div className=" mx-16 grid md:grid-cols-2 lg:grid-cols-4 lg:text-center ">
        <Card PropImage={Bull} PropTitle={"Card of my dog!"} PropText={"I will describe here the best way to do a good education to your bully!"}/>
        <Card PropImage={pruebaImagen2} PropTitle={"Image"} PropText={"This is a image !"}/>
        <Card  PropText={"This is my Garfield, amazing cat with a unexpected inteligence!!"}/>
        <Card PropImage={paisaje} PropTitle={"Amazing Views!"} PropText={"We have here amazing views!"}/> 
        </div>
        
        </>
         
    )
}

export default GroupCards;
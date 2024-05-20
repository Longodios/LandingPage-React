import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from "./NavBar"
import WelcomeCard from './WelcomeCard'
import Card from "./Card";
import GroupCards from './GroupCards';
import Footer from './Footer';
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(
    <>
    <NavBar/>
    
    <div className="container-fluid">
      <WelcomeCard/>
      
        <GroupCards/>
        <Footer/>
      </div> 
      
    </>
   
  )


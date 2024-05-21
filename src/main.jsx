import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from "./components/NavBar"
import WelcomeCard from './WelcomeCard'
import Card from "./components/Card";
import GroupCards from './components/GroupCards';
import Footer from './components/Footer';
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


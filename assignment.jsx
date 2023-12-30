import React from 'react';
import Header from '../Header';
import SideNav from '../SideNav';
import MainPart from '../MainPart';
import Footer from '../Footer';
// import style from './style';
import './style.css';

const AppNext = ()=>{
    return(<>
   
    <Header id="Header"/>
    <div className="mid-div">
    <SideNav className="SideNav"/>
    <MainPart className="MainPart"/>
    </div>
    
    <Footer id = "Footer"/>
    {/* <style/> */}
   
    </>
    )
    };
 
    
       
export default AppNext;
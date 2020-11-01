import React from 'react';
import Logo from '../ui/olxlogo.png';
import {Link} from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
import { BsFillCaretDownFill } from "react-icons/bs";
import { Button } from 'react-bootstrap';
function Header(){
    const nav =[
       {ID: 1, label: "Mobile Phones"},
       {ID: 2, label: "Cars"},
       {ID: 3, label: "Motorcycles"},
       {ID: 4, label: "Houses"},
       {ID: 5, label: "Tv-video-audio"},
       {ID: 6, label: "Tablets"},
       {ID: 7, label: "Land & Plots"},
          ];
    return(
        <React.Fragment>
        <div className='header fixed flex aic'>
         <div className='logo'>
        <img src={Logo}   />
        </div>

        <div className='location rel flex aic'>
       <div className='icon-search ico s24' />
       <input className='label s15 font' placeholder='your location' value='pakistan' />
       <BsFillCaretDownFill className='downfill'  />
        </div>

        <div className='search flex aic'>
        <input type='text' placeholder='find cars,mobile phones, and more...' className='query s15 font' />
        <BsSearch className='searchicon' />
        </div>

        <div className='actions flex aic'>
            <Link to='/account/signin' className='color fontb s16 '>sign in</Link>
            <button className='sell flex color aic'>
            <div className='icon-plus ico s24' />
            <h2 className='s18 font'>Sell</h2>
            </button>
        </div>
        
        </div>

        <div className='hnav fixed flex aic'>
        <button className='view-cates flex aic color'>
        <h2 className='s18 font'>All categories</h2>
        <button className='icon-charvon-down arro s24' />
        </button>
        {
            nav.map(item => {
            return(
            <Link to={"/browser/" + item.ID} className='noul noulh  color bl font s15'>{item.label}</Link>
            )
            })
        }
        </div>
        <div className='hclr' />
        </React.Fragment>
    )
}
export default Header;
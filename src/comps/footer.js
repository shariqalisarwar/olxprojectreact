import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';


function Footer(){
    return(
        <React.Fragment>
        <div className='footer flex'>
        <div className='block flex flex-col'>
        <h2 className='title s16 fontb color'>Popular categories</h2>
        <Link to='/' className='noul noulh font s14 color'>Cars</Link>
        <Link to='/' className='noul noulh font s14 color'>Flat for Rent</Link>
        <Link to='/' className='noul noulh font s14 color'>Jobs</Link>
        <Link to='/' className='noul noulh font s14 color'>Mobile Phones</Link>
        </div>
        <div className='block flex flex-col'>
        <h2 className='title s16 fontb color'>Trending searches</h2>
        <Link to='/' className='noul noulh font s14 color'>Bikes</Link>
        <Link to='/' className='noul noulh font s14 color'>Watch for Rent</Link>
        <Link to='/' className='noul noulh font s14 color'>Books</Link>
        <Link to='/' className='noul noulh font s14 color'>Dogs</Link>
        </div>
        <div className='block flex flex-col'>
        <h2 className='title s16 fontb color'>About us</h2>
        <Link to='/' className='noul noulh font s14 color'>About olx group</Link>
        <Link to='/' className='noul noulh font s14 color'>OLX blog</Link>
        <Link to='/' className='noul noulh font s14 color'>Contact us</Link>
        <Link to='/' className='noul noulh font s14 color'>OLX for businesses</Link>
        </div>
        <div className='block flex flex-col'>
        <h2 className='title s16 fontb color'>OLX</h2>
        <Link to='/' className='noul noulh font s14 color'>Help</Link>
        <Link to='/' className='noul noulh font s14 color'>Sitemap</Link>
        <Link to='/' className='noul noulh font s14 color'>Legal and privacy information</Link>
       
        </div>
        </div>
        <div className='footerb flex'>
        <h2 className='#fff font s14'>Other Countries India - South Africa - Indonesia</h2>
        <h2 className='r #fff font s14'>Free Classifieds in Pakistan. © 2006-2020 OLX</h2>
         </div>
        </React.Fragment>
    )

}
export default Footer;
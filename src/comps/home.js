import React, {useEffect, useState} from 'react';
import AddItem from './AddItem';


function HomePage(){

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        if (loading){
            let _list = [];
            for(let i=0; i < 12; i++){
            _list.push(<AddItem placeholder={true} />)
            }
            setList(_list);
        }
    }, list );
    
    return(
        <React.Fragment>
        <div className='home-page'>
            <img className='imgo1' width='250px' src='https://apollo-singapore.akamaized.net/v1/files/oy4zy4utzkqs2-PK/image;s=300x600;q=60'  />
            <img  className='imgo2' width='280px' src='https://apollo-singapore.akamaized.net/v1/files/nan2mx450tc23-PK/image;s=300x600;q=60'  />
            <img  width='250px' src='https://apollo-singapore.akamaized.net/v1/files/fqvn6rqc8z5t-PK/image;s=300x600;q=60'  /> 
            <h1>Rs 7,500,000</h1>
            <p>
            3 Bds-4 Ba -5 Marla <br/>
             5 Marla house on 45 month install</p>
            <h1 className='ho2' >Rs 5,500,000</h1>
            <p className='po2'>
            3 Bds-4 Ba -5 Marla <br/>
             5 Marla house on 45 month install</p>
             <h1 className='ho3' >Rs 15,500,000</h1>
            <p className='po3'>
            6+ Bds-6 Ba -8 Marla <br/>
            8 Marla luxury house must secure locality</p> <br/>
            <img className='imgo4' height='150px' width='270px' src='https://apollo-singapore.akamaized.net/v1/files/s610y2ia7fdg-PK/image;s=300x600;q=60' />
            <img className='imgo5' height='150px' width='270px' src='https://apollo-singapore.akamaized.net/v1/files/c461n7iogzf8-PK/image;s=300x600;q=60' />
            <img className='imgo6' height='150px' width='270px' src='https://apollo-singapore.akamaized.net/v1/files/plzzmk6z8t3j-PK/image;s=300x600;q=60' />
            <h1 className='ho4' >Rs 170,000</h1>
            <p className='po4'>
            Apple IPHONE 12 and PRO With 1 year </p>
            <h1 className='ho5' >Rs 6,800</h1> <br/>
            <p className='po5'>
            3gb 32gb Arrows Fujitsu maade in japan </p>
            <h1 className='ho6' >Rs 6,800</h1> <br/>
            <p className='po6'>
            3gb 32gb Arrows Fujitsu maade in japan </p>
            <img className='imgo7' src='https://apollo-singapore.akamaized.net/v1/files/wacf9yi2pvdm3-PK/image;s=300x600;q=60' />
            <img className='imgo8' src='https://apollo-singapore.akamaized.net/v1/files/wygrrphm7gdk-PK/image;s=300x600;q=60' />
            <img className='imgo9' src='https://apollo-singapore.akamaized.net/v1/files/umik3mmzxmq33-PK/image;s=300x600;q=60' />
            <h1 className='ho7' >Rs 100,000</h1>
            <p className='po7'>
            Jolta electric bike </p>
            <h1 className='ho8' >Rs 1550,000</h1>
            <p className='po8'>
            Yamaha R6 vip </p>
            <h1 className='ho9' >Rs 85,000</h1>
            <p className='po9'>
            Ravi Storm </p>
            <img className='imgo10' src='https://apollo-singapore.akamaized.net/v1/files/k7tjfuh2hwyh1-PK/image;s=300x600;q=60' />
            <img className='imgo11' src='https://apollo-singapore.akamaized.net/v1/files/a9czwzavwqbp3-PK/image;s=300x600;q=60' />
            <img height='150px' width='270px' className='imgo12' src='https://apollo-singapore.akamaized.net/v1/files/hu1uv5a8b09w2-PK/image;s=300x600;q=60' />
            <h1 className='ho10' >Rs 5,500</h1>
            <p className='po10'>
            Wama trader 22inch Samsung </p>
            <h1 className='ho11' >Rs 15,800</h1>
            <p className='po11'>
             22inch Tv sample made in china </p>
             <h1 className='ho12' >Rs 36,800</h1>
            <p className='po12'>
             Samsung 55inch UHD display led tv </p>
            <div className='ad-list flex'>
         {list}
       </div>
       <button className='load-more fontb c333  anim s20'>Load more</button>

       <div className='app-ribbon flex aic'>
           <div className='img'>
               <img className='bl' src='https://statics.olx.com.pk/external/base/img/phone-app.webp' />
           </div>
           <div className='meta'>
       <h2 className='title fontb s30 color'>TRY THE OLX APP</h2>
       <h2 className='slogan font s18 color'>Buy, sell and find just about anything using the app on your mobile.</h2>
       </div>
       <div className='links'>
       <h2 className='title fontb s20 color'>Get your app today</h2>
       <div className='flex as'>
       <a href='#' className='noul bl'><img src='https://statics.olx.com.pk/external/base/img/appstore_2x.webp' /> </a>
       <a href='#' className='noul bl'><img src='https://statics.olx.com.pk/external/base/img/playstore_2x.webp' /> </a> </div>

       </div>
       </div>
               </div>
               </React.Fragment>
         )
}
export default HomePage;
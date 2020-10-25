import React, { useEffect, useState } from "react";



function HomePage() {

  return (
          <body className="HomePageBody">
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="HomePageTitle">
              <h1 className='letter'><span>POKE</span><span>CARD</span><span>EX</span></h1>
              <button className='openButton'></button>
            </div>
            <div className='suggestions'>
                <ul className='suggestedPowers'>
                    <li className='powerType'><button>fire</button></li>
                    <li className='powerType'><button>fire</button></li>
                    <li className='powerType'><button>fire</button></li>
                </ul>
            </div>
            <div class="icon-bar">
                <a href="https://www.facebook.com/Pokemon/" class="facebook"><i class="fa fa-facebook"></i></a>
                <a href="https://twitter.com/playpokemon" class="twitter"><i class="fa fa-twitter"></i></a>
                <a href="https://www.instagram.com/pokemon/?hl=en" class="instagram"><i class="fa fa-instagram"></i></a>
                <a href="https://www.youtube.com/channel/UCFctpiB_Hnlk3ejWfHqSm6Q" class="youtube"><i class="fa fa-youtube"></i></a>
            </div>
          </body>
        );
      }
      
      export default HomePage;
    
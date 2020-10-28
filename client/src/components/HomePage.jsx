import React, { useEffect, useState } from "react";
import axios from 'axios';
import pokemontheme from './pokemontheme.mp3'


function HomePage({ history }) {
    const [venaData, setVenaData] = useState({});
    const [duckData, setDuckData] = useState({});
    const [genData, setGenData] = useState({});
    
    useEffect(() => {
        const fetchData = async () => {
          let response = await axios.get(
            `https://api.pokemontcg.io/v1/cards/ex14-28`
          );
          setVenaData(response.data);
        };
         fetchData();
      }, []);


      useEffect(() => {
        const fetchData1 = async () => {
          let duck = await axios.get(
              `https://api.pokemontcg.io/v1/cards/base5-65`
            );
          setDuckData(duck.data);
        };
         fetchData1();
      }, []);


    useEffect(() => {
      const fetchData2 = async () => {
        let gengar = await axios.get(
            `https://api.pokemontcg.io/v1/cards/sm9-53`
          );
        setGenData(gengar.data);
      };
       fetchData2();
    }, []);
    
    const handleClick = () => {
      history.push("/search");
    };
  return (
          <body className="HomePageBody">
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="HomePageTitle">
              <h1 className='letter'><span>POKE</span><span>CARD</span><span>EX</span></h1>
              <button className='openButton'onClick = {handleClick}></button>
            </div>
            <div className='suggestions'>
                <div className='suggestedPowers'>
                    <div className='powerType' ><button ><img className ='psyPokemon' src={(duckData.card && duckData.card.imageUrl)}></img></button></div> 
                    <div className='powerType' ><button ><img className ='grassPokemon' src={(venaData.card && venaData.card.imageUrl)}></img></button></div>
                    <div className='powerType' ><button ><img className ='poisonPokemon' src={(genData.card && genData.card.imageUrl)}></img></button></div> 
                </div> 
            </div>
            <div class="icon-bar">
                <a href="https://www.facebook.com/Pokemon/" class="facebook"><i class="fa fa-facebook"></i></a>
                <a href="https://twitter.com/playpokemon" class="twitter"><i class="fa fa-twitter"></i></a>
                <a href="https://www.instagram.com/pokemon/?hl=en" class="instagram"><i class="fa fa-instagram"></i></a>
                <a href="https://www.youtube.com/channel/UCFctpiB_Hnlk3ejWfHqSm6Q" class="youtube"><i class="fa fa-youtube"></i></a>
            </div>
            <div className="music">
              <audio autoPlay controls ='autoPlay' src={pokemontheme} /> 
            </div>
          </body>
        );
  }
      
      export default HomePage;
    
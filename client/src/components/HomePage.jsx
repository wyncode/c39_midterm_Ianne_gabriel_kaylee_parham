import React, { useEffect, useState } from "react";
import axios from 'axios';
import pokemontheme from './pokemontheme.mp3'


function HomePage({ history }) {
    const [pikaData, setPikaData] = useState({});
    const [duckData, setDuckData] = useState({});
    const [dogData, setDogData] = useState({});
    
    useEffect(() => {
        const fetchData = async () => {
          let response = await axios.get(
            `https://api.pokemontcg.io/v1/cards/xyp-XY174`
          );
          setPikaData(response.data);
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
        let dog = await axios.get(
          `https://api.pokemontcg.io/v1/cards/ecard3-3`
          );
        setDogData(dog.data);
      };
       fetchData2();
    }, []);
    
    const handleClick = () => {
      history.push("/search");
    };
    const handleClick2 = () => {
      history.push("/card/ecard3-3");
    };
    const handleClick3 = () => {
      history.push("/card/xyp-XY174");
    };
    const handleClick4 = () => {
      history.push("/card/base5-65");
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
                    <div className='powerType' ><button onClick ={handleClick2}><img className ='firePokemon' src={(dogData.card && dogData.card.imageUrl)}></img></button></div> 
                    <div className='powerType' ><button onClick ={handleClick3}><img className ='lightingPokemon' src={(pikaData.card && pikaData.card.imageUrl)}></img></button></div>
                    <div className='powerType' ><button onClick ={handleClick4}><img className ='waterPokemon' src={(duckData.card && duckData.card.imageUrl)}></img></button></div> 
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
    
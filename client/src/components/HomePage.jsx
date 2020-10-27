import React, { useEffect, useState } from "react";
import axios from 'axios';



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
                    <h1 className='powerType' ><button className ='psyPokemon'><img src={(duckData.card && duckData.card.imageUrl)}></img></button></h1> 
                    <h1 className='powerType' ><button className ='grassPokemon'><img src={(venaData.card && venaData.card.imageUrl)}></img></button></h1> 
                </div> 
            </div>
            <div class="icon-bar">
                <a href="https://www.facebook.com/Pokemon/" class="facebook"><i class="fa fa-facebook"></i></a>
                <a href="https://twitter.com/playpokemon" class="twitter"><i class="fa fa-twitter"></i></a>
                <a href="https://www.instagram.com/pokemon/?hl=en" class="instagram"><i class="fa fa-instagram"></i></a>
                <a href="https://www.youtube.com/channel/UCFctpiB_Hnlk3ejWfHqSm6Q" class="youtube"><i class="fa fa-youtube"></i></a>
            </div>
            <div className="music">
              {/* <audio controls="controls" autoplay preload='auto' loop id="myAudio">
              <source src="Pokémon Theme Song.mp3" type="audio/mpeg" /></audio> */}
                {/* <audio controls="controls"><source src="Pokémon Theme Song.mp3" type="audio/mpeg" /></audio> */}
            </div>
          </body>
        );
  }
      
      export default HomePage;
    
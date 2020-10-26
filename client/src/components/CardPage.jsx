import React, { useState, useEffect } from 'react';
import './CardPage.css';
import axios from 'axios';

const CardPage = ()=>{
    const[apiData, setApiData]= useState({});
    // let { id } = useParams();
    let id = "ex14-28"
    useEffect(() => {
    const fetchData = async () => {
       let response = await axios.get(`https://api.pokemontcg.io/v1/cards/${id}`)
       setApiData(response.data.card)
    //    console.log(response)
    }
    fetchData()
    }, []);
    return ( 
    <body className="main">
       <img className="cardboxlogo" src={"https://cdn2.iconfinder.com/data/icons/pokemon-outline/64/pokeball-people-pokemon-nintendo-video-game-gaming-gartoon-ball-512.png"}/>
       <h2 className="editor">Editor's Pick!</h2>
        <title className="logo">PokeCardex
        <img className="icon" src={"https://lh3.googleusercontent.com/proxy/locmU1zumZTKpEF54b-mt8C0jvOKvtlmXQDMZ4ABmRSptZJAYGONrd-Dq_Kpe2Hv4G1UJWivtUjL-_5pVtY33KwvngQ2aO2objN23qS7JexeDJbxyG7GvFVEHKoTbld0lg"}/>
        
        </title>
        <div className="cardbox">
           <img className="card" src={(apiData.imageUrl && apiData.imageUrl)}/>
           <ul className="cardinfo">
               <li className="name"><h1>{(apiData.name && apiData.name)}</h1></li>
               <li className="type"><h3>Type: {(apiData.supertype && apiData.supertype)}</h3></li>
               <li className="set"><h3>Set:{(apiData.set && apiData.set)}</h3></li>
               <li className="artist"><h3>Artist: {(apiData.artist && apiData.artist)}</h3></li>
               <li className="rarity"><h3>Rarity: {(apiData.rarity && apiData.rarity)}</h3></li>
           </ul>
        </div>
        <form className= "searchbar">
            <label>           
                <input type="search" name= "search" placeholder="Search..."/>
            </label>
        </form> 
        <div class="wrapper">
            <img className="item" src={"https://images.pokemontcg.io/gym2/29_hires.png"}/>
            <img className="item" src={"https://images.pokemontcg.io/gym2/29_hires.png"}/>
            <img className="item" src={"https://images.pokemontcg.io/gym2/29_hires.png"}/>
            <img className="item" src={"https://images.pokemontcg.io/gym2/29_hires.png"}/>
            <img className="item" src={"https://images.pokemontcg.io/gym2/29_hires.png"}/>
            <img className="item" src={"https://images.pokemontcg.io/gym2/29_hires.png"}/>
        </div>      
    </body>
    );
};

export default CardPage;

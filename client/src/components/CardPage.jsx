import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CardPage.css';
import axios from 'axios';
import NavBar from './NavBar';

const echoice = [
  'xy0-14',
  'xy7-4',
  'pl2-103',
  'dp6-90',
  'dp1-6',
  'xy0-28',
  'xy0-29',
  'xy0-30',
  'det1-6',
  'col1-4',
  'base1-49',
  'base6-3',
  'gym2-29',
  'base4-2',
  'bw4-25',
  'base4-10',
  'hgss1-4',
  'swsh2-25',
  'sm10-158',
  'hgss1-82',
  'swsh2-85',
  'pl3-70',
  'ex1-7',
  'dp2-102',
  'bw11-19',
  'neo3-6',
  'dp5-14',
  'dp6-2',
  'gym1-29',
  'sm11-55',
  'bw9-20',
  'ex2-24',
  'ecard3-12',
  'hgss2-37',
  'xy3-62',
  'sm4-3',
  'xy9-30',
  'ecard1-62',
  'xy8-55',
  'xyp-XY161',
  'dp5-7',
  'base2-19',
  'bw5-66',
  'xy6-37',
  'swsh2-30',
  'dp1-122',
  'det1-18',
  'dp6-7',
  'dp4-20',
  'gym2-7',
  'gym2-23',
  'xy11-25',
  'base6-33',
  'neo2-20',
  'base3-31',
  'sm115-21',
  'bw11-RC3',
  'hgss3-36',
  'sm10-29'
];


const getUniqueChoiceRecursive = (limit) => {
    const chosen = {}

    const recursiveHelper = () => {
        const choice = echoice[Math.floor(Math.random() * echoice.length)]
        if (chosen[choice]) {
            return recursiveHelper()
        }
        chosen[choice] = true;
        return choice
    }
    const uniqueChoices = Array(limit).fill().map(_ => recursiveHelper())
    return uniqueChoices;
}

const CardPage = () => {
  const [apiData, setApiData] = useState({});
  const { id } = useParams();

  const [randomPokemons, setRandomPokemons] = useState([]);

  /**
   * getRandomPokemons will do the following 
   * 1. create an array of 8 elements. It will map over that array of 8 elements and fill them with a random choice
   * 2. It will then create a reequest for each of the random choices and assign it to a new array called pokemonRequests
   * 3. After creating the requests, we will await for them all the resolve in parallel using Promise.all 
   * 4. last but not least, we will set the resolution of these promises in state.
   */
  const getRandomPokemons = async () => {
    const randomChoices = getUniqueChoiceRecursive(8)

    const pokemonRequests = randomChoices.map(async choice => {
      const pokemonData = await axios.get(`https://api.pokemontcg.io/v1/cards/${choice}`);

      return pokemonData.data.card;
    });

    const pokemons = await Promise.all(pokemonRequests);

    setRandomPokemons(pokemons);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://api.pokemontcg.io/v1/cards/${id}`);
      setApiData(response.data.card);
    };
    fetchData();

    getRandomPokemons();
  }, []);

  return (
    <>
      <NavBar />
      <div className="main">
        <h2 className="editor">Editor's Pick!</h2>
        <title className="logo">PokeCardex</title>
        <div className="cardbox">
          <div className="card">
            <img src={apiData?.imageUrl} />
          </div>

          <ul className="cardinfo">
            <li className="name">
              <h1>{apiData?.name}</h1>
            </li>
            <li className="type">
              <h3>Type: {apiData?.supertype}</h3>
            </li>
            <li className="set">
              <h3>Set:{apiData?.set}</h3>
            </li>
            <li className="artist">
              <h3>Artist: {apiData?.artist}</h3>
            </li>
            <li className="rarity">
              <h3>Rarity: {apiData?.rarity}</h3>
            </li>
          </ul>
        </div>

        <div class="wrapper">
          {randomPokemons.map(randoPokemon => (
            <a key={randoPokemon.id} href={`/card/${randoPokemon.id}`}>
              <img className="item" src={randoPokemon?.imageUrl} height="100" width="100" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
export default CardPage;
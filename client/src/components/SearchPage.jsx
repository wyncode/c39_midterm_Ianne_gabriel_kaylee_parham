import React, { useState, useEffect} from 'react'
import Card from './Card'
import NavBar from './NavBar'
import axios from "axios"
import Conditional from "./Conditional"

const Search = ({ history }) => {
    const [lookingAnswer, setAnswer] = useState("");
    const [pokeType, setType] = useState("");
    const [rarity, setRarity] = useState("");
    const [subType, setSubType] = useState("");
    const [api, setApi] = useState({});
    const [search, setSearch] = useState("");
    const [addition, setAddition] = useState(null);

    if (!lookingAnswer) {
      let landing = async () => {
        const response = await axios.get(
          `https://api.pokemontcg.io/v1/cards?name=pikachu`
        );
        const { data } = response;
        setApi(data);
      }
      landing()
    }
    

    useEffect(() => {
        const getMe = async () => {
          const response = await axios.get(
            `https://api.pokemontcg.io/v1/cards?supertype=${lookingAnswer}`
          );
          const { data } = response;
          setApi(data);
        };
        getMe();
      }, [lookingAnswer]);
    
      const handleValue = (event) => {
        setAnswer(event.target.value);
      };
    
      useEffect(() => {
        if (!search && pokeType && rarity) {
          setAddition(`&&types=${pokeType}&&rarity=${rarity}`);
        } else if (search && pokeType && rarity) {
          setAddition(`&&types=${pokeType}&&rarity=${rarity}&&name=${search}`);
        } else if (search && pokeType) {
          setAddition(`&&types=${pokeType}&&name=${search}`);
        } else if (search && rarity) {
          setAddition(`&&rarity=${rarity}&&name=${search}`);
        } else if (!search && pokeType) {
          setAddition(`&&types=${pokeType}`);
        } else if (!search && rarity) {
          setAddition(`&&rarity=${rarity}`);
        } else if (search) {
          setType("");
          setRarity("");
          setAddition(`&&name=${search}`);
        } else if (subType && rarity) {
          setAddition(`&&subtype=${subType}&&rarity=${rarity}`);
        } else if (subType) {
          setAddition(`&&subtype=${subType}`);
        }
    
        const getMe = async () => {
          const response = await axios.get(
            `https://api.pokemontcg.io/v1/cards?supertype=${lookingAnswer}${addition}`
          );
          const { data } = response;
          setApi(data);
        };
        getMe();
      }, [pokeType, rarity, search, lookingAnswer, addition, subType]);
    
      const handleChange = (event) => {
        setSearch(event.target.value);
      };
      return (
        <>
        <NavBar/>
        <div className="search-container">
            <main>
            <h1> Gotta Catch 'Em All </h1>
            <form>
                <ul>
          <div className="dropdown" id="dropMain">
            <h3 className="drop-heading" id="dropMainHead">
              {" "}
              What are you looking for today?
            </h3>
            <div className="dropdown-content" name="looking">
              <label htmlFor="">
                {" "}
                <input
                  type="radio"
                  value="Pokemon"
                  name="looking"
                  checked={lookingAnswer === "Pokemon"}
                  onChange={handleValue}
                />{" "}
                Pokemon{" "}
              </label>
              <label htmlFor="">
                {" "}
                <input
                  type="radio"
                  value="Energy"
                  name="looking"
                  checked={lookingAnswer === "Energy"}
                  onChange={handleValue}
                />{" "}
                Energy{" "}
              </label>
              <label htmlFor="">
                {" "}
                <input
                  type="radio"
                  value="Trainer"
                  name="looking"
                  checked={lookingAnswer === "Trainer"}
                  onChange={handleValue}
                />{" "}
                Trainer{" "}
              </label>
            </div>
          </div>
          <Conditional
            value={lookingAnswer}
            setType={setType}
            setRarity={setRarity}
            setSubType={setSubType}
            handleChange={handleChange}
          />
          </ul>
          </form>
          <section>
            <div className="card-container">
              {api.cards &&
                api.cards.map((card) => (
                  <Card key={card.id} id={card.id} name={card.name} image={card.imageUrl} />
                ))}
            </div>
          </section>
          </main>
          </div>
        </>
      );
    }

export default Search
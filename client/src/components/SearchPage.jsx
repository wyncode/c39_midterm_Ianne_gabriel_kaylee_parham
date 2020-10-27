import React, { useState, useEffect} from 'react'
import Card from './Card'
import NavBar from './NavBar'
import EditorPick from "./EditorPick"
import axios from "axios"

const Search = ({ history }) => {
    //state variable 
    const [api, setApi] = useState({})
    //use effect 
    useEffect( ()=>{
        const getMe = async () => {
            const response = await axios.get("https://api.pokemontcg.io/v1/cards?name=charizard")
            //axios alreadxy converts to JSON, but we need to pull from the data 
            const { data } = response
            setApi(data)
            // console.log(data)
        }
        getMe()
    }, [api] )

    return (
    <>
        <NavBar />
        <div className="search-container"> 
            <main>
            <h2> Gotta Catch 'Em All </h2>
             <form>
                <input className="search-input" onChange={(e) => console.log(e.target.value)}/>
                <ul> 
                    <div className="dropdown">
                    <h3 className="drop-heading"> Type</h3>
                        <div className="dropdown-content">
                            <label for=""> <input type="radio" value=""/> Water </label>
                            <label for=""> <input type="radio" value=""/> Fire </label>
                            <label for=""> <input type="radio" value=""/> Electric </label>
                            <label for=""> <input type="radio" value=""/> Grass </label>
                            <div className="spanBtn" for=""> <input type="submit"/> </div>
                        </div>
                    </div>
                </ul>
            </form>
                <section>
                    <div className="card-container"> 
                    { api.cards && api.cards.map(card => <Card key={card.id} name={card.name} image={card.imageUrl} />)
                    }
                    </div>
                <EditorPick />
                </section>
            </main>
        </div>
         
         </>)
}

export default Search
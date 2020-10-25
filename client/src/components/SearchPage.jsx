import React from 'react'
import Card from './Card'
import NavBar from './NavBar'
import SearchBar from './SearchBar'
import EditorPick from "./EditorPick"

const Search = () => {
    return (
    <>
        <NavBar />
        <div className="search-container"> 
            {/* <div className="spacer"></div> */}
            <main>
            <SearchBar /> 
                <section>
                    <div className="card-container"> 
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                <EditorPick />
                </section>
            </main>
            {/* <div className="spacer"></div> */}
        </div>
         
         </>)
}

export default Search
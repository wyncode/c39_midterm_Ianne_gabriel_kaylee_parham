import React from 'react'

const SearchBar = () => {
    return (
        <>
        <h2> Gotta Catch 'Em All </h2>
        <form>
        {/* <div className="search ">
            <span class="fa fa-search"></span>
            <input placeholder="Search term" className="search-input" onChange={(e) => console.log(e.target.value)}/>
        </div> */}
            {/* <span >&#9732;</span> */}
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
        </>
    )
}

export default SearchBar 
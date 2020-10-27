import React from 'react'

const Card = (props) => {
    return (
        <div className="container">
            <a href={`/card/${key}`}>
                <img alt="blastoise" src={props.image}/>
            </a>
            <div className="middle">
                 <h1 className="text"> {props.name}</h1>
            </div>
        </div>
    )
}

export default Card
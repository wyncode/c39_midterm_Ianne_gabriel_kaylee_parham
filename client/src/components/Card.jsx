import React from 'react'

const Card = ({id, image, name}) => {
    console.log(id)
    return (
        <div className="container">
            <a href={`/card/${id}`}>
                <img alt={name} src={image}/>
            </a>
            <div className="middle">
                 <h1 className="text"> {name}</h1>
            </div>
        </div>
    )
}

export default Card
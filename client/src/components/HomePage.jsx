import React from 'react';
import './HomePage.css'

function HomePage() {
  return (
    <body className='HomePageBody'>
    <div className= 'HomePageTitle'>
        <h1>WELCOME TO THE POKEDEX</h1>
        <button className='openButton'><img alt= 'pokeball' src='./images/pokeball1.png'/></button>
    </div>
    </body>
  );
}

export default HomePage;
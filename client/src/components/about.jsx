import React from 'react';
import NavBar from './NavBar'

function AboutPage({ history }) {



    return(
        <body className='AboutMainBody'>
            <NavBar/>
            <div className='aboutTitle'>
                <h1>About The Team</h1>
            </div>
            <div className='names'>
                
            </div>
            <div className='theWorkers'>
                <div className='kaylee'>
                    <div className='k'>
                        <h3>Kaylee</h3>
                        <ul className='ourTypes'>
                            <li><strong>Type:</strong><em>Water</em></li>
                            <li></li>
                            <li><strong>Fun Fact:</strong><em>"The first video game I ever played was Pokemon Snap on the N64"</em></li>
                        </ul>
                    </div>
                </div>
                <div className='ianne'>
                    <div className='i'>
                        <h3>Ianne</h3>
                        <ul className='ourTypes'>
                            <li><strong>Type:</strong><em>Fairy</em></li>
                            <li></li>
                            <li><strong>Fun Fact:</strong><em>"I've beat the Pokemon League in 5 different pokemon generations!"</em></li>
                        </ul>
                    </div>
                </div>
                <div className='gabriel'>
                    <div className='g'>
                        <h3>Gabriel</h3>
                        <ul className='ourTypes'>
                            <li><strong>Type:</strong><em>Ghost</em></li>
                            <li></li>
                            <li><strong>Fun Fact:</strong><em>"Pokemon Red was the first RPG that I ever played and completed."</em></li>
                        </ul></div>
                </div>
            </div>
        </body>

    )
}
export default AboutPage;
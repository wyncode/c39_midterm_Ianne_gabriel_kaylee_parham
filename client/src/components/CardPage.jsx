import React, { useState, useEffect } from 'react';
import './CardPage.css';
import axios from 'axios';
import NavBar from './NavBar'

const CardPage = ()=>{
    const[apiData, setApiData]= useState({});
    let id = "ex14-28"

    useEffect(() => {
    const fetchData = async () => {
       let response = await axios.get(`https://api.pokemontcg.io/v1/cards/${id}`)
       setApiData(response.data.card)
    //    console.log(response)
    }
    fetchData()
}, []);

let echoice = ["xy0-14","xy7-4","pl2-103","dp6-90","dp1-6",
"xy0-28","xy0-29","xy0-30","det1-6","col1-4","base1-49","base6-3",
"gym2-29","base4-2","bw4-25","base4-10","hgss1-4","swsh2-25","sm10-158",
"hgss1-82","swsh2-85","pl3-70","ex1-7","dp2-102","bw11-19","neo3-6","dp5-14",
"dp6-2","gym1-29","sm11-55","bw9-20","ex2-24","ecard3-12","hgss2-37","xy3-62","sm4-3",
"xy9-30","ecard1-62","xy8-55","xyp-XY161","dp5-7","base2-19","bw5-66","xy6-37","swsh2-30",
"dp1-122","det1-18","dp6-7","dp4-20","gym2-7","gym2-23","xy11-25","base6-33","neo2-20","base3-31",
"sm115-21","bw11-RC3","hgss3-36","sm10-29"]
    

    const rando1 = echoice[Math.floor(Math.random() * echoice.length)];
    const rando2 = echoice[Math.floor(Math.random() * echoice.length)];
    const rando3 = echoice[Math.floor(Math.random() * echoice.length)];
    const rando4 = echoice[Math.floor(Math.random() * echoice.length)];
    const rando5 = echoice[Math.floor(Math.random() * echoice.length)];
    const rando6 = echoice[Math.floor(Math.random() * echoice.length)];
    const rando7 = echoice[Math.floor(Math.random() * echoice.length)];
    const rando8 = echoice[Math.floor(Math.random() * echoice.length)]; 

    const[randoData1, setrandoData1]= useState({});
    useEffect(() => {
        const randoFetch1 = async () => {
           let randore1 = await axios.get(`https://api.pokemontcg.io/v1/cards/${rando1}`)

           setrandoData1(randore1.data.card)
        }
        randoFetch1()
        }, []);
        const[randoData2, setrandoData2]= useState({});
        useEffect(() => {
            const randoFetch2 = async () => {
            let randore2 = await axios.get(`https://api.pokemontcg.io/v1/cards/${rando2}`)
    
               setrandoData2(randore2.data.card)
            }
            randoFetch2()
            }, []);
            const[randoData3, setrandoData3]= useState({});
            useEffect(() => {
                const randoFetch3 = async () => {
                let randore3 = await axios.get(`https://api.pokemontcg.io/v1/cards/${rando3}`)
        
                   setrandoData3(randore3.data.card)
                }
                randoFetch3()
                }, []);
                const[randoData4, setrandoData4]= useState({});
                useEffect(() => {
                    const randoFetch4 = async () => {
                    let randore4 = await axios.get(`https://api.pokemontcg.io/v1/cards/${rando4}`)
            
                       setrandoData4(randore4.data.card)
                    }
                    randoFetch4()
                    }, []);
                    const[randoData5, setrandoData5]= useState({});
                    useEffect(() => {
                        const randoFetch5 = async () => {
                        let randore5 = await axios.get(`https://api.pokemontcg.io/v1/cards/${rando5}`)
                
                           setrandoData5(randore5.data.card)
                        }
                        randoFetch5()
                        }, []);
                        const[randoData6, setrandoData6]= useState({});
                        useEffect(() => {
                            const randoFetch6 = async () => {
                            let randore6 = await axios.get(`https://api.pokemontcg.io/v1/cards/${rando6}`)
                    
                               setrandoData6(randore6.data.card)
                            }
                            randoFetch6()
                            }, []);
                            const[randoData7, setrandoData7]= useState({});
                            useEffect(() => {
                                const randoFetch7 = async () => {
                                let randore7= await axios.get(`https://api.pokemontcg.io/v1/cards/${rando7}`)
                        
                                   setrandoData7(randore7.data.card)
                                }
                                randoFetch7()
                                }, []);
                                const[randoData8, setrandoData8]= useState({});
                                useEffect(() => {
                                    const randoFetch8 = async () => {
                                    let randore8 = await axios.get(`https://api.pokemontcg.io/v1/cards/${rando8}`)
                            
                                       setrandoData8(randore8.data.card)
                                    }
                                    randoFetch8()
                                    }, []);
 
    return ( 
        <>
        <NavBar />
    <div className="main">
       <h2 className="editor">Editor's Pick!</h2>
        <title className="logo">PokeCardex
        
        </title>
        <div className="cardbox">
            <div className="card">
            <img src={(apiData.imageUrl && apiData.imageUrl)}/>
            </div>
           
           <ul className="cardinfo">
               <li className="name"><h1>{(apiData.name && apiData.name)}</h1></li>
               <li className="type"><h3>Type: {(apiData.supertype && apiData.supertype)}</h3></li>
               <li className="set"><h3>Set:{(apiData.set && apiData.set)}</h3></li>
               <li className="artist"><h3>Artist: {(apiData.artist && apiData.artist)}</h3></li>
               <li className="rarity"><h3>Rarity: {(apiData.rarity && apiData.rarity)}</h3></li>
           </ul>
        </div>

        <div class="wrapper">
            <img className="item" src={(randoData1.imageUrl && randoData1.imageUrl)} height="100" width="100"/>
            <img className="item" src={(randoData2.imageUrl && randoData2.imageUrl)} height="100" width="100"/>
            <img className="item" src={(randoData3.imageUrl && randoData3.imageUrl)} height="100" width="100"/>
            <img className="item" src={(randoData4.imageUrl && randoData4.imageUrl)} height="100" width="100"/>
            <img className="item" src={(randoData5.imageUrl && randoData5.imageUrl)} height="100" width="100"/>
            <img className="item" src={(randoData6.imageUrl && randoData6.imageUrl)} height="100" width="100"/>
            <img className="item" src={(randoData7.imageUrl && randoData7.imageUrl)} height="100" width="100"/>
            <img className="item" src={(randoData8.imageUrl && randoData8.imageUrl)} height="100" width="100"/>
        </div>      
    </div>
    </>
    );
};

export default CardPage;

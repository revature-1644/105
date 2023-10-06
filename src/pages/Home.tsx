import React, { SyntheticEvent, useEffect, useState } from "react";
import { Pokemon } from "../model/Pokemon";
import { PokemonInfo } from "../components/PokemonInfo";

export function Home(){
    console.log("Home page component has loaded .... ?")
    const [apiData, setApiData] = useState<Pokemon[]>([]);
    // const [firstLoad, setFirstLoad ] = useState(true);
    // numeric value that may be incremented from any child pokemonInfo component.
    const [numPokemonCaught, setPokemonCaught] = useState(0);

    useEffect(()=>{
        // if(firstLoad){
            console.log("this code runs after every render");
            fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => {return response.json()}).then(json => {console.log(json.results); setApiData(json.results)});
            // setFirstLoad(false);
        // }
    }, []);

    useEffect(()=>{
        console.log("the pokemon have been updated: "+apiData);
    })

    function incrementPokemonCaught(value:number){
        console.log(value);
        setPokemonCaught(numPokemonCaught+value);
    }

    return (
        <>
            <h1>Home page works!</h1>
            <h1>Number of pokemon caught: {numPokemonCaught}</h1>
            {apiData.map(pokemon => <PokemonInfo pokemon={pokemon} incrementor={incrementPokemonCaught}></PokemonInfo>)}
        </>
    )
}
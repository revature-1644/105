import React, { MouseEventHandler, SyntheticEvent, useEffect, useState } from "react";
import { Pokemon } from "../model/Pokemon";
interface propsInterface {
    pokemon : Pokemon,
    incrementor : any
}
export function PokemonInfo(props : propsInterface){
    const [numberInput, setNumberInput] = useState(0);
    const [type, setType] = useState("");

    function updateNumberInput(event:SyntheticEvent){
        let target = event.target as HTMLInputElement;
        console.log("value from input box: "+target.value)
        setNumberInput(parseInt(target.value));
    }
    function sendStateToParent(){
        props.incrementor(numberInput);
    }
    useEffect(()=>{
        fetch(props.pokemon.url, {
            mode:"cors",
            method:"GET",
            headers:{}
        }).then(response => {return response.json()})
        .then(json => setType(json.types[0].type.name));
    },[])

    return (
        <>
        <h3>{props.pokemon.name}</h3>
        <p>{props.pokemon.url}</p>
        <p>{type == "" ? "loading type..." : type}</p>
        <input type="number" value = {numberInput} onInput={updateNumberInput}></input>
        <button onClick={sendStateToParent}>catch!</button>
        </>
    )
}
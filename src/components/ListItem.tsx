import React, { useState } from "react";

interface propInterface {
    itemNumber : number
}
/**
 * We use props when we need a component to have a unchanging value to start with.
 * eg: if we go to a user's profile page, the user's name could be passed in as a prop.
 * We don't expect the user's name to change while we navigate their profile, so having an immutable variable 
 * is ok.
 * 
 * We use state when we need a component to have a changing variable that is modified as the user
 * navigates the site.
 * eg: if we're on an ecommerce site, we expect to be able to change the amount of products
 * in our cart while looking at the cart page.
 */
export function ListItem(props: propInterface){
    // setValue will both change the variable and refresh the component.
    // unmount / mount.
    const [myValue, setValue] = useState(1);

    function incrementValue(){
        setValue(myValue + 1);
    }

    return (
    <>
        <p>List item: + {props.itemNumber}, my state is {myValue}</p>
        <button onClick={incrementValue}>inc</button>
    </>)
}
import React from "react";
import { User } from "../model/User";

/**
 * I can guarantee that the parent component will provide us with the required variables using an interface,
 * which just prevents the developer from making a mistake.
 * 
 * Because interfaces are provided by Typescript and are not native to Javascript, they just function
 * as a compile-time check to make sure the developer is being careful.
 */
interface propsInterface {
    user : User
}

export function UserInfo(props:propsInterface){
    return (
        <>
            <h1>Hello, {props.user.firstName} {props.user.lastName}!</h1>
            <img src={props.user.image}></img>
        </>
    )
}
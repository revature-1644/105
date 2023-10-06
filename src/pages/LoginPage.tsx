import React, { SyntheticEvent, useState } from 'react';
import { User } from '../model/User';
import { UserInfo } from '../components/UserInfo';

function LoginPage() {

    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [user, setUser] = useState({id:0, username:"", password:"", firstName:"", lastName:"", gender:"",
        image:"", token:""});


    function processLogin(){
        fetch("https://dummyjson.com/auth/login", {
            mode:"cors",
            method:"post",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(
                {
                    username:username,
                    password:password
                }
            )
        }).then(response => {console.log(response); return response.json()})
        .then( json => {console.log(json); setUser(json as User)});
    }

    function setUsernameInput(event:SyntheticEvent){
        let target = event.target as HTMLInputElement;
        setUsername(target.value);
    }
    function setPasswordInput(event:SyntheticEvent){
        let target = event.target as HTMLInputElement;
        setPassword(target.value);
    }
    /**
     * Conditional rendering - because we can mix JS logic and JSX in whatever way we like, we can
     * use programmatic logic to choose what we display...
     * eg, if statement, ternary, map on an array to convert an array of values into many different
     * elements/components
     * @returns
     */
    function conditionalUserInfo(){
        if(user.firstName === ""){
            return <h1>Please log in...</h1>
        }else{
            return <UserInfo user={user}></UserInfo>
        }
    }

    return (
        <>
            <h1>Login</h1>
            <h3>Username</h3>
            <input value={username} onInput={setUsernameInput}></input>
            <p>{username}</p>
            <h3>Password</h3>
            <input value={password} onInput={setPasswordInput}></input>
            <p>{password}</p>
            <button onClick={processLogin}>submit</button>
            {conditionalUserInfo()}
        </>
    )
}

export default LoginPage;
export interface User {
    id:number,
    username:string,
    password:string,
    firstName:string,
    lastName:string,
    gender:string,
    image:string,
    token:string
}
/**
 * interfaces function as a guarantee that code follows certain behavior (contract) - 
 * so I guarantee that props/state will contain certain variables.
 * 
 * I want to make sure that a variable is available (and is a certain type) if I intend to display it on the 
 * site.
 */
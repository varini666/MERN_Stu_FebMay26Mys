// Props destructuring
// a syntax based on the ES6 approach that allows us to unpack properties from props
// prop object directly into its values
import { React } from "react";

function UserProfile({username,skill}){
    return(
        <div>
            <p>User:{username}</p>
            <p>Skill:{skill}</p>
        </div>
    )
}
// Parent component
export function PropDestructuring(){
    return(
        <>
        <h2>Prop Destructuring</h2>
        <UserProfile username="varini" skill="React"/>
        </>
    );
}
// Event handling with state
import { useState } from "react";

// In react:
// events use camelCase naming, eg: onClick, on Change
export function EventHandlingState(){
    const [name, setName] = useState('');
    
    const handleChange = (e) =>{
        setName(e.target.value);
    };

    const handleClick = (e) =>{
        alert(`Hello, ${name || 'Guest'}`);
    };

    return(
        <>
        <h2>Event handling with state</h2>
        <input type="text" value={name}
        onChange={handleChange}
        placeholder="Enter your name" />

        <button onClick={handleClick}>Greet User</button>
        <p>Current input:{name}</p>
        </>
    )
}
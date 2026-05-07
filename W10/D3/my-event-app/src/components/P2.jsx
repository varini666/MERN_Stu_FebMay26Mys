// React Event object
// What is it?
// React automatically passes an event object to event handlers
// This objects contains details about the event
// eg: i/p field: event.target.value
// event: info about the i/p change
// event.target: the html i/p element

import { useState } from "react";

// event.target.value: the current text typed by the user
export function EventObject(){
    const [text, setText] = useState('');
    const handleChange = (event) => {
        const currentValue = event.target.value;
        console.log(currentValue);
        setText(currentValue);
    };
    return(
    <section>
        <h2>Event object</h2>
        <input type="text" value={text} onChange={handleChange}
        placeholder = "Type something"
        />
        <p>You typed: {text}</p>
    </section>
)
}
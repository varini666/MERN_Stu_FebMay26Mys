// Event Delegation in React
// Instead of attaching a separate clickHandler to every element we attach one Handler to the parent
// Parent -> child
// Bubbles up to the parent

// why is it used?
// Reduces repeated event handlers
// code is cleaner & manageable

import { useState } from "react";

//It useful when rendering many similar items
export function EventDelegation(){
    const [selectedItem,setSelectedItem]=useState('None');
    //Parent click handler
    const handleListClick = (event)=> {
        const clickedItem=event.target.closest('li[data-item]');
    if(!clickedItem) return;
    const itemName = clickedItem.dataset.item;
    console.log('Clicked Item: ',itemName);
    setSelectedItem(itemName);
    };
    return(
        <section>
            <h2>Event Delegation</h2>
            <ul onClick={handleListClick}>
                <li data-item="Laptop">Laptop</li>
                <li data-item="Mobile phone">Mobile Phone</li>
                <li data-item="Car">Car</li>
            </ul>
            <p>Selected:{selectedItem}</p>
        </section>
    )
}
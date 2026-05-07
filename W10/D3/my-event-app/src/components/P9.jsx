// Stop event propagation
export function EventObj(){
    const handleParentClick = (event) => {
        alert(`Parent clicked target:
            ${event.target.tagName}
            currentTarget: ${event.currentTarget.tagName}`);
    };
    const handleChildClick = (event) => {
        event.stopPropagation();
        alert(`Child clicked (Propagation stopped) target:
            ${event.target.tagName}
            currentTarget: ${event.currentTarget.tagName}`);
}
const handleSubmit = (event) => {
        event.preventDefault();
        alert("Form submitted safely by preventing default refresh")   
    };

    const handleBoxClick = (event) => {
        alert(`Box clicked  
            target: ${event.target.tagName}
            currentTarget: ${event.currentTarget.tagName}`);
    };
    return(
        <section onClick={handleParentClick}
            style={{padding:'20px',backgroundColor:'gray'}}
            >
                <h2>Event object</h2>
                <button onClick={handleChildClick}>Child BUtton</button>
                <button onClick={handleSubmit}>Submit form</button>

                <div onClick={handleBoxClick}
                style={{padding:'20px',backgroundColor:'skyblue'}}>
                <span style={{padding:'20px',backgroundColor:'black',display:'initial-block'}}>
                    Inner Span
                </span>
                </div>
        </section>
    )
}
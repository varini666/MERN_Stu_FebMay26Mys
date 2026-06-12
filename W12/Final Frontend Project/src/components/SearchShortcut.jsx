export default function SearchShortcut(params){
    function handleKeyDown(){
        if(event.key === "Escape"){
            alert("search Cleared");
        }
    }
            return(
                <section>
                    <h2>Keyboard Search</h2>
                    <input type="text" placeholder="Press Esc"
                    onKeyDown={handleKeyDown} />
                </section>
            );
        }
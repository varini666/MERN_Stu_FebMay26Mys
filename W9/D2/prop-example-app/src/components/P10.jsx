// Passing Function as Props
// Also called as callback Props
// uses when the child component has to invoke parent logic
function ChildButton({onGreet}){
    return(
        <button onClick={onGreet}>
            Invoke Parent Function
        </button>
    )
}
export function FunctionProps(){
    const greet = () => alert('Hello from parent function');
    return(
        <>
        <h2> Passing Function as Props</h2>
        <ChildButton onGreet={greet}/>
        </>
    )
}
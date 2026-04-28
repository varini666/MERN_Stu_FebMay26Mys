import {React,Component} from "react";
export class ClassComponentState extends Component{
    // constructor: runs once when component is first created
    constructor(props){   //props is user defined
        super(props); //calls parent constructor first
        this.state = {count:0}; // 1.state is going to be here and stays even after the re-renders
    }

    // 2.Event handler : arrow function to handle 'this' binding
    increment = () => {
        this.setState((prevState)=>({    //setState is a keyword , prevState is user defined
            count:prevState.count + 1
        }));
    };

    // 3.Render: state/props change
    render(){
        console.log("render() called");
    return(
        <div>
        <h3>Class Component state</h3>
        <p>count:{this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        </div>
    )
}
}
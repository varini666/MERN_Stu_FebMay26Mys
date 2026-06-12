import './App.css'
import { useState } from 'react';
import MovieCard from './components/MovieCard';
import HomePage from './pages/HomePage';

function App() {
    const [count, setCount] = useState(0)

    return (
        //Component Composition
        <HomePage/>
    )
}

export default App
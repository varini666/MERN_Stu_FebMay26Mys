// useContext hook
// Context: lets you share data b/w components, without passing props manually through every level
// why to use useContext?
// 1. Help to avoid prop drilling
// 2. Useful for shared value: theme details, logged-in user details, lang & app setting

import { createContext, useContext, useState } from "react"

// Basic steps
// 1. Create a context
// 2. Wrap components with provider
// 3. Read value using useContext()

// 1. Create a context
const ThemeContext = createContext();

// child component 1
function Header(){
    const theme = useContext(ThemeContext);
    return(
        <header style={{
            padding:'20px',
            marginTop:'20px',
            background: theme === 'dark'?'#222' : '#eee',
            color : theme === 'dark'?'#fff' : '#000',
        }}>
            <h3>Header Component</h3>
            <p>Current theme from context: {theme}</p>
        </header>
    );
}

// child component 2
function Content(){
    const theme = useContext(ThemeContext);
    return(
        <div style={{
            padding:'20px',
            marginTop:'20px',
            background: theme === 'dark'?'#333' : '#f9f9f9',
            color : theme === 'dark'?'#fff' : '#000',
        }}>
            <p>This component also uses the same context value</p>
        </div>
    );
}
function Layout(){
    return(
        <div>
            <header />
            <Content />
        </div>
    );
}

export function UseContextIntro(){
    // Shared state
    const [theme,setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark':'light');
    };

    return(
        <section>
            <h2>useContext Example via theme</h2>
            <p>
                Example to show the use of context sharing
            </p>
            <button onClick={toggleTheme}>
                Toggle Theme
            </button>
            <ThemeContext.Provider value={theme}>
                <Layout/>
            </ThemeContext.Provider>
        </section>
    );
}
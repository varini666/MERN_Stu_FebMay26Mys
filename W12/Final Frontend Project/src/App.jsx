import "./App.css";
import MovieSearch from "./components/MovieSearch";
import GenreFilter from "./components/GenreFilter";
import BookButton from "./components/BookButton";
import LoginForm from "./components/LoginForm";
import SearchShortcut from "./components/SearchShortcut";
function App() {
    return (
        <>
            {/* Controlled Component */}
            <MovieSearch/>
            <GenreFilter/>
            <BookButton/>
            <LoginForm/>
            <SearchShortcut/>
        </>
    );
}

export default App;
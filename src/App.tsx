import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/section/main/Main";
import {Skills} from "./layout/section/skills/Skills";
import {Languages} from "./layout/section/languages/Languages";
import {Works} from "./layout/section/works/Works";
import {Testimony} from "./layout/section/testimony/Testimony";
import {Contact} from "./layout/section/contacts/Contact";
import {Slogan} from "./layout/section/slogan/Slogan";
import {Footer} from "./layout/footer/Footer";
import {GoTopBtn} from "./components/goTopBtn/GoTopBtn";

const name = ["Russian", "English", "French"]

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Languages languageItems={name}/>
            {/*<Testimony/>*/}
            {/*<Slogan/>*/}
            <Contact/>
            <Footer/>
            <GoTopBtn/>
        </div>
    );
}

export default App;

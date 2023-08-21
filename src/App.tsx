import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/section/main/Main";
import {Skills} from "./layout/section/skills/Skills";
import {Languages} from "./layout/section/languages/Languages";
import {Works} from "./layout/section/works/Works";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Languages/>
            <Works/>
        </div>
    );
}

export default App;

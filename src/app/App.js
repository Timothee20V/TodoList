import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../components/Home.js";
import TaskList from "../components/TaskList.js";
import React from "react";
import Navigation from '../navigation/Navigation.js';
import Informations from "../informations/Informations";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/todoList" element={<TaskList/>}/>
                    <Route path="/informations" element={<Informations/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
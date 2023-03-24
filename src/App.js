import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home.js";
import TaskList from "./pages/TaskList.js";
import React from "react";
import Navigation from './navigation/Navigation.js';
import Informations from "./pages/informations/Informations";

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
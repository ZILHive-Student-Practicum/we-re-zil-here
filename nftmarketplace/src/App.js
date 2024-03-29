import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
 
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import BuyScreen from "./screens/BuyScreen";
import Collections from "./screens/Collections";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen />}></Route>
                <Route path="/home" element={<HomeScreen />}></Route>
                <Route path="/buy" element={<BuyScreen />}></Route>
                <Route path="/collections" element={<Collections />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

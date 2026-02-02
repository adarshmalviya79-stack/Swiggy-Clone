import React from "react";
import ReactDOM from "react-dom/client"
import Restaurant from "./component/restaurant"
import Home from "./component/Home";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import RestaurantMenu from "./component/RestaurantMenu"

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/restaurant" element={<Restaurant />} />
                <Route path="/city/:city/:id" element={<RestaurantMenu />} />
            </Routes>
        </BrowserRouter>
    )
}

    
ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)
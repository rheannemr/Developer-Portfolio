import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function App() {
    return (
        <BrowserRouter>
        <Route exact path ="/" component={Landing} />
        <Route exact path ="/about" component={About} />
        <Route exact path ="/work" component={Work} />
        <Route exact path ="/contact" component={Contact} />
        </BrowserRouter>
    );
}

export default App;


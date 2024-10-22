import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body";

// main functional component
const AppLayout = () => {
    return (
        <div className="app">
           <Header />
           <Body />
        </div>
    );
};

const data = <h1>Rahul Singh</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

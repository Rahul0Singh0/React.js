import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = (
    <h1 className="head" tabIndex="5">
        Namastey React using JSX 🚀
    </h1>
);

// const fn = () => true single element return
// const fn = () => {
//     true
// };
// console.log(fn())

const elem = <span>React Element</span>

// React Functional Component
const Title = () => (
    <h1 className="head" tabIndex="5">
    {/* <span>React Element</span> */}
    {elem}
        Namastey React using JSX 🚀
    </h1>
);

// IF data are coming from api in case Attacker attacks
// In case JSX doesnot blindly run it sanitize automatically your data then execute it
// const number = api.getData();
const number = 10000
// Component Composition
const HeadingComponent = () => (
    // is a normal JS function return some piece of JSX Code
    <div id="container">
        <Title/>
        <Title></Title>
        {/* above both conventions are same */}
        {/* Also call function below checkout */}
        {Title()}
        {number}
        <h2>{number+1}</h2>
        {console.log("Hello console")}
        {heading}
        <h1 className="heading">Namastey React Functional Component</h1>
    </div>
)

// const HeadingComponent2 = () => <h1 className="heading">Namastey React Functional Component</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);









// React Element equivalent to DOM Element
// React.createElement => Object => HTMLElement(render)

// const heading = React.createElement(
//     "h1", 
//     {id:"heading"}, 
//     "Namastey React 🚀"
// );

// console.log(heading)
// // JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
// // const jsxHeading = <h1 id="heading">Namastey React using JSX 🚀</h1>
// const jsxHeading = <h1 className="head">Namastey React using JSX 🚀</h1>

// // jsxHeading is React Element(Object) and <h1>Namastey React using JSX</h1> is JSX.
// console.log(jsxHeading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);


/* 
// to achieve nested html structure using react
// const parent = React.createElement("div",{id: "parent"},
//     React.createElement("div",{id: "child"},
//         React.createElement("h1",{},"I am h1 tag.")
//     )
// )
// create two elements as a siblings
const parent = React.createElement(
    "div",
    {id: "parent"},
    // Array of Children
    React.createElement("div",{id: "child"}, [
        React.createElement("h1",{}, "I am h1 tag.🚀"),
        React.createElement("h2",{}, "I am h2 tag.")
    ]),
    React.createElement("div",{id: "child2"}, [
        React.createElement("h1",{}, "I am h1 tag."),
        React.createElement("h",{}, "I am h2 tag.")
    ])
)

// JSX: will make our life easy when we have to create tags.
// modern react development


console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)

const heading = React.createElement(
    "h1", 
    {id: "heading", xyz: "abc"}, // This object is a place where we give attributes to the tags.
    "Hello World front React!"
);
// heading is an Object
// console.log(heading)

// const root = ReactDOM.createRoot(document.getElementById("root"));
// rendering the root
// It is just putting the parent/heading elements inside the root tag
// root.render(heading);
*/
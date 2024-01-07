import React from "react";
import ReactDOM from "react-dom/client";

//JSX => React.createElement => object => HTMLElement (render)
// JSX  and react are separate
// JSX ->  html and js merge together
// JSX -> html like or xml like syntax

//React ELement
// className="heading" tabIndex="5" learn whats this
const reactElement = 
  <h1 id="heading" className="heading" tabIndex="5">
    reactElement 
  </h1>
;

// Fucntional Component
const Title = ()=>(
  <h1 id="heading" className="heading" tabIndex="5">
    JSX Title 💕
  </h1>
);

// Fucntional Component
// component composition
// different ways to invoke component composition
// {} -> write JS expression to execute -> like react element , functional component
const number =7;

const HeadingComponent = () => (
  <div id="container">
    {reactElement}
    {Title()}
    <Title></Title>
    <Title/>
    {number}   
  <h1 id="heading" className="headding"> This is Functional Component 😂</h1>
  </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);

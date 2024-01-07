
/*
 <div id = parent> 
    <div id= child1>
        <h1>Im an h1 tag</h1>
        <h2>Im an h2 tag</h2>
    </div>
    <div id= child2>
        <h1>Im an h1 tag</h1>
        <h2>Im an h2 tag</h2>
    </div>
 </div>

*/
import React from "react" ;
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", {id:"parent"},
        [
            React.createElement("div",{id:"child1"}, [
            React.createElement("h1",{id:"heading"}, "Im an namaste react 👌😂"),
            React.createElement("h2",{}, "Im an h2 tag")
        ]
        ),
            React.createElement("div",{id:"child2"}, [
            React.createElement("h1",{}, "Im an h1 tag"),   
            React.createElement("h2",{}, "Im an h2 tag")
        ]
        ) ]
  );

  console.log(parent);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);



  
/* const heading = React.createElement("h1",{id:heading},"Hi how are you");

// note: const heading = React.createElement(tag,tag props/attributes,children[] );

console.log(heading); // heading is just an  object -> react element beomes html which browser understands
// holds props and its children,
 //hold h1 attributes -> id:heading

 // ReactElement(object) => HTML (browser understands)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
 */

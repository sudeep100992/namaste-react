import React from "react";
import User from "./User";
import UserClass from "./UserClass";


class About extends React.Component {

    constructor(props){
      //  debugger;
        super(props)
        console.log("Parent constructor")
    }

    componentDidMount(){
       // debugger;
        console.log("Parent componentDidMount")
    }


    render(){
        //debugger;
        console.log("Parent render")
        return (
            <div>
              <h1>This is About page</h1>
              <h2>
                Page loading through LINK component, refreshes only body(Outlet)
                component
              </h2>
             
              <UserClass name="Sudeep" location="Bangalore" />
              {/* <UserClass name="Chand" location="Bangalore" /> 2nd child */}
        
              {/* <User name="Sudeep" location="Bangalore" />  functional component*/}
            </div>
          );
    }
}


// FUNCTIONAL COMPONET converted to CLASS based component 

// const About = () => {
//   return (
//     <div>
//       <h1>This is About page</h1>
//       <h2>
//         Page loading through LINK component, refreshes only body(Outlet)
//         component
//       </h2>
//       <UserClass name="Sudeep" location="Bangalore" />

//       {/* <User name="Sudeep" location="Bangalore" /> */}
//     </div>
//   );
// };

export default About;

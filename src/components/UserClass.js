import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    //debugger;
    super(props); // mandatory to initialise the super class Component with props
    this.state = {
      count: 0,
      userInfo : {
        name:"dummy",
        location:"default"
      }
    };
    console.log("Child constructro");
  }

  
  // to make api calls - WHY ? In Functional Component we useEffect() -> loads -> render -> api call -> render 
  // same behavior here
  async componentDidMount(){
       // debugger;
        console.log("Child componentDidMount")

        const data = await fetch ("https://api.github.com/users/sudeep100992")
        const json =await data.json();

        console.log("api call "+ json)


    this.setState({
        userInfo: json
    });
}

componentDidUpdate() {
    debugger;
    console.log("Child componentDidUpdate");
}

componentWillUnmount() {
    debugger;
    console.log("Child componentWillUnmount");
}

  render() {
   // debugger;
    const { login, location } = this.state.userInfo;
    const { count } = this.state;

    
    console.log(login + " Child render");

    return (
      <div className="user-function">
        <h1> {login} Class </h1>
        <button
          onClick={ () => {
            //NEVER UPDATE STATE varibles directly
            console.log(this.state.count)
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increase Counter
        </button>
        <h2> {count}</h2>
        <h2> {location} Class </h2>
        <h2> @sudeep100992 </h2>
      </div>
    );
  }
}

export default UserClass;

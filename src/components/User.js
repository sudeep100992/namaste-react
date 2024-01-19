import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-function">
      <h1> {props.name} </h1>
      <button onClick={ ()=> {setCount(count+1)}}> Increase Counter</button>
      <h2>{count}</h2>
      
      <h2> {props.location} </h2>
      <h2> @sudeep100992 </h2>
    </div>
  );
};

export default User;

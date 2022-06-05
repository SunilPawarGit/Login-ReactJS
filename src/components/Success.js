import React from "react";
import { Link,useNavigate } from "react-router-dom";
import Admin from "./Admin";
import Users from "./Users";
const Success=(props)=> {
  let navi =useNavigate();
  const HandleSignOut=()=>{
    props.setAuth("guest");
    navi("/");
  }
  const capitalize=(string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="text-center">
      <h1>
        
        You logged in as{" "}
        {capitalize(
          !sessionStorage.getItem("userType")
            ? "guest"
            : sessionStorage.getItem("userType")
        )}
      </h1>
          
      {sessionStorage.getItem("userType") === "admin" && <Admin/>}
      {sessionStorage.getItem("userType") === "user" && <Users/>}
      {sessionStorage.getItem('userType') !== "guest" ? <button  onClick={HandleSignOut} className="btn btn-primary" >Sign Out
      </button>:<Link to="/signup"  className="btn btn-primary">Sign Up</Link>}
      
    </div>
  );
}

export default Success;

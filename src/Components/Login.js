import React, { useState } from "react";
import "./Login.css"
import { Link } from "react-router-dom";
import Header from "./Header";

const database = {
    "Admin": 'Nokia@123',
}


localStorage.setItem("Authentication" , "false")

const Login = () =>{

    const [uname , setUname] = useState("")
    const [pwd, setPwd] = useState("")

    function Check(){
        if(uname === ""){
            document.getElementById("invalid-credentials").innerHTML = "Kindly check your username";
            document.getElementById("invalid-credentials").style.display = "block";
        }
        else if(pwd === ""){
            document.getElementById("invalid-credentials").innerHTML = "Kindly check your password";
            document.getElementById("invalid-credentials").style.display = "block";
        }
        else{
            if(database[uname] === pwd){
                document.getElementById("invalid-credentials").style.display = "none";
                localStorage.setItem("Authentication" , "true")
                document.getElementById("home-direct").click();
            }
            else{
                document.getElementById("invalid-credentials").innerHTML = "Invalid username or password";
                document.getElementById("invalid-credentials").style.display = "block";
            }
        }
    }

    return(
        <div>
            <Header/>
        <div className="loginbody">
            <div style={{fontSize:"xxx-large", fontFamily: "Georgia"}}>LOGIN</div>
            <div id="invalid-credentials" className="invcred"></div>
            <div className="loginbox">
                <div className="credential">
                    <label className="cred">Enter Username</label>
                    <input className="credinput" type="text" placeholder="Username" onChange={(e)=>{setUname(e.target.value.trim())}}></input>
                </div>
                <div className="credential">
                    <label className="cred">Enter Password</label>
                    <input className="credinput" type="password" placeholder="Password" onChange={(e)=>{setPwd(e.target.value)}}></input>
                </div>
                <button className="loginbutton" onClick={Check}>LOGIN</button>
            </div>
            <Link to="/Home" id="home-direct"/>
        </div>
        </div>
    )
}

export default Login;
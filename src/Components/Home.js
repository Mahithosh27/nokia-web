import React, { useEffect} from "react";
import "./Home.css"
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Style.css";
import { AiOutlineClose } from "react-icons/ai";
import network from './network.jpg';
import comdata from '../img/comdata.png'
import cad from '../img/cad.jpg';
import tb from '../img/tb.jpg';

var file_id = "";

const Home = () =>{

    useEffect(()=>{
        const auth  = localStorage.getItem("Authentication")
        if(auth !== "true"){
            document.getElementById("login-direct").click()
        }
    })

    const ChooseFile = e =>{
      document.getElementById('file-input').click();
      file_id = e.currentTarget.id;
      console.log("Choose file")
    }

    function OpenFile(e){
        console.log("open file")
        if(document.getElementById('file-input').value === ""){
          return;
        }
        const file = e.currentTarget.files[0];
        console.log("Fileee " + file)
        const fid = file_id + "_frame"
        const fdid = file_id + "_div"
        console.log("div id " + fdid)
        const fr = document.getElementById(fid);
        fr.src = URL.createObjectURL(file);
        document.getElementById(file_id).style.display = "none";
        document.getElementById(fdid).style.display = "flex";
        fr.style.display = "flex"
        console.log("Fvalueee - " + document.getElementById('file-input').value)
    }

    function CloseFile(e){
      console.log("Fvalueee bef closeee - " + document.getElementById('file-input').value)  
      const pid = e.currentTarget.parentNode.id;
      const open = pid.substring(0,pid.length - 4)
      document.getElementById(pid).style.display = "none";
      document.getElementById(open).style.display = "flex";
      document.getElementById('file-input').value = "";
    }

    return(
        <div>
            <Navbar/>
            <div className="homebody">
                <div className="text">welcome to nokia!</div>
                 <Link to="/" id="login-direct"/>
                 <input onChange={OpenFile} type="file" id="file-input"/> 
                 <div className="flex-cards">
                    <div id="component_data" className="card" onClick={ChooseFile}>
                      <div>
                        <img className="card-pic" src={comdata} alt="Component Data"/>
                      </div>
                      <div className="card-option">
                          COMPONENT DATA
                      </div>
                    </div>
                    <div className="frame" id="component_data_div">
                      <iframe className="frame" id="component_data_frame"/>
                      <AiOutlineClose className="close-icon" id="close" onClick={CloseFile}/>
                    </div>
                    <div id="cad" className="card" onClick={ChooseFile}>
                      <div>
                        <img className="card-pic" src={cad} alt="Cad"/>
                      </div>
                      <div className="card-option">
                          CAD
                      </div>
                    </div>
                    <div  className="frame" id="cad_div">
                        <iframe className="frame" id="cad_frame"></iframe>
                    <AiOutlineClose className="close-icon" id="close" onClick={CloseFile}/>
                      </div>
                    <div id="troubleshoot" className="card" onClick={ChooseFile}>
                      <div>
                        <img className="card-pic" src={tb} alt="Troubleshoot"/>
                      </div>
                      <div className="card-option">
                          TROUBLESHOOT
                      </div>
                    </div>
                    <div className="frame" id="troubleshoot_div">
                        <iframe className="frame" id="troubleshoot_frame"/>
                    <AiOutlineClose className="close-icon" id="close" onClick={CloseFile}/>
                        </div>
                    <div id="others" className="card" onClick={ChooseFile}>
                      <div>
                        <img className="card-pic" src={network} alt="Others"/>
                      </div>
                      <div className="card-option">
                          OTHERS
                      </div>
                    </div>
                    <div className="frame" id="others_div">
                        <iframe className="frame" id="others_frame"/>
                    <AiOutlineClose className="close-icon" id="close" onClick={CloseFile}/>
                      </div>
                 </div>
            </div>
      </div>
      
  
     
    )
}

export default Home;
import React, { useState } from 'react'
import "../App.css"
import English from './English'
import GenKnow from './GenKnow'
import Math from './Math'

const Homepage = () => {
    const[subject,setSubject] = useState("")

    const showPaper = (subject) =>
    {
        switch(subject){
            case "english":
                return(
                    <English/>
                )
            case "math":
                return(
                    <Math/>
                )   
             
            case "gk":
                return(
                    <GenKnow/>
                )   
            
            default:
                return(
                    <div className="text-center mt-5">
                        <p className="display-1"><i>All the best for quiz!!!!!</i></p>
                    </div>
                )
        }
    }

    return (

        <div className="container-fluid">
           
            <div className="text-center">
                <p className="display-2" id="para">Welcome to MyQuiz<br/><p className="display-6"><i>Unlocking knowledge at the speed of thought.</i></p></p>
            </div>         
      
            <div id="butSel" className="text-center">
                <h4><i>Press the button for which subject you would like to start quiz</i></h4><br/>
                <div className="row justify-content-center">
                    <div className="col-3">
                    <button className="btn btn-lg btn-outline-primary" onClick={()=>setSubject("english")}>English</button>
                    </div>
                    <div className="col-3">
                    <button className="btn btn-lg btn-outline-danger" onClick={()=>setSubject("math")}>Mathematics</button>
                    </div>
                    <div className="col-3">
                    <button className="btn btn-lg btn-outline-warning" onClick={()=>setSubject("gk")}>General Knowledge</button>
                    </div>
                    <div className="col-3">
                    <button className="btn btn-lg btn-outline-success" onClick={()=>setSubject("")}>Reset Quiz</button>
                    </div>                    
                </div>
            </div>

            <div>
                {showPaper(subject)}
            </div>
        
        </div>
    )
}

export default Homepage

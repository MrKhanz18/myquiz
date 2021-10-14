import axios from 'axios';
import React, { useEffect, useState } from 'react'

const English = () => {
    
    const url = "http://localhost:3000/english";
    const [quest, setQuest] = useState([]);
    const [val, setVal] = useState("");

    useEffect(() => {
        axios.get(url)
        .then((response) => {
          console.log(response.data[0]);
          setQuest(response.data)
        });
      },[]);

    const onSubmit = (i,val) => {
        setVal("")
        if(quest[i].ans === val){
            quest[i].status="ok"
        }
        else{
            quest[i].status="nok" 
        }
    }  
    
    const onCheck = (status) => {
        switch(status){
            case "ok":
                return(
                    <span className="badge bg-success">Correct</span>
                )
            case "nok":
                return(
                    <span className=" badge bg-danger">Incorrect</span>
                )
            default:
                return(
                    <span className="badge bg-warning">Not Answered</span>
                )
        }
    }

    return (
        <div className="text-right">
            {quest.map((q,i)=>(
                <div>
                
                <h4>{q.ques}</h4>
                <p>{q.option[0]}</p>
                <p>{q.option[1]}</p>
                <p>{q.option[2]}</p>
                <p>{q.option[3]}</p>
                
                <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/><br/>
                <button className="badge bg-success" onClick={() => onSubmit(i,val)}>Submit</button><br/>
                {onCheck(q.status)}
                </div>
            ))}
            
        </div>
    )
}

export default English

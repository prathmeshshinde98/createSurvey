import TypeSelector from "./TypeSelector"
import Question from "./Question"
import Options from "./Options"
import { useState } from "react"
const CreateSurvey = ({squestions}) => {
    const getRandom =()=> {return Math.floor((Math.random()*1000)+1)};
    const [qText, setQtext] = useState('');
    const [qType, setQtype] = useState(0);
    const [options, setOptions] = useState([{uid:getRandom(), value:""},
                                            {uid:getRandom(), value:""}]);
    const addOptions = () =>{
        let newOption ={
            uid:getRandom(),
            value:""
        }
        let updatedOptions=[...options];
        updatedOptions.push(newOption);
        setOptions(updatedOptions);
    }
    const deleteOptions=()=>{
        if(options.length===2)alert("Error: Question must have two options");
        else{
            let updatedOptions=[...options];
            updatedOptions.pop();
            setOptions(updatedOptions);
        }
    }
    const updateOptionText =(id, text)=>{
        let updatedOptions = [...options];
        console.log(updatedOptions);
        let changeIndex = updatedOptions.findIndex(x=>x.uid===id);
        updatedOptions[changeIndex].value = text;
        setOptions(updatedOptions);
    }
    return (
        <>
            <TypeSelector qType={qType} setQtype={setQtype}/>
            {qType!==0?
           <><Question/>{options.map((opt,key)=>(
               <>
                    <Options key={key} 
                    uid={opt.id}
                    addOptions={addOptions} 
                    deleteOptions={deleteOptions} 
                    updateText={updateOptionText}/>
              </>
           ))} </>:null}
            
            
        </>
      );
}
 
export default CreateSurvey;
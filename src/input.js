import React, {useState} from 'react'

const  Input= (props) => {
    const [inputText, setInputText] = useState("");

    function inputChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);  
      }
  return (
    <div>
    <span>
        
          <input
            type="text"
            name="fname"
            placeholder="Enter Your Task Here"
            onChange={inputChange}
            value={inputText}
          />
        </span>
        <i class="fa-solid fa-plus" onClick={()=>{
            props.onAdd(inputText);
            setInputText("");
        }}></i>
      
    </div>
  ) 
}

export default Input;
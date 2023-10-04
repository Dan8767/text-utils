import React, { useState } from "react";

export default function FormText(props) {
  const [text, setText] = useState("");
  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  const handleUpclick = () =>{
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase.","success")
  }
  const handleDownclick = () =>{
    let newtextt = text.toLowerCase();
    setText(newtextt);
    props.showAlert("Converted to lowercase.","success")
  }
  const handleClearText = ()=>{
    let newtextt = '';
    setText(newtextt);
    props.showAlert("Cleared Text.","success")
  }
  const handleCopyText =()=> {
    var copyText = text;
    navigator.clipboard.writeText(copyText);
    props.showAlert("Copied text to clipboard.","success")
  }
  return (
    <div style={{marginTop:"60px"}}>
      <h1 className={`text-${props.mode==='light' ? 'dark':'light'}`}>Enter the text below to analyze:</h1>
      <div className="mb-3">
        <textarea
          className={`form-control bg-${props.mode==='light' ? 'light':'secondary'} text-${props.mode==='light' ? 'dark':'light'}`}
          style={{border:"blue"}}
          value={text}
          onChange={handleOnchange}
          placeholder="Enter your text here"
          id="myBox"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <button 
      type="submit"
      className="btn btn-primary"
      onClick={handleUpclick}
      > Convert to Uppercase
      </button>
      <button 
      type="submit"
      className="btn btn-primary ms-2"
      onClick={handleDownclick}
      > Convert to Lowercase
      </button>
      <button 
      type="submit"
      className="btn btn-primary ms-2"
      onClick={handleClearText}
      > Clear Text
      </button>
      <button 
      type="submit"
      className="btn btn-primary ms-2"
      onClick={handleCopyText}
      > Copy Text to Clipboard
      </button>
      <h5 className={`text-${props.mode==='light' ? 'dark':'light'}`}>Total Characters: {text.split('').length}</h5>
      <h5 className={`text-${props.mode==='light' ? 'dark':'light'}`}>Total Words: {text.split(' ').filter((val)=>val!=='').length}</h5>
    </div>
  );
}

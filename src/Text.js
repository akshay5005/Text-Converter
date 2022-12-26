import React, { useState } from 'react'

export default function Text() {
    const handleUpClink=()=>{
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLoClink=()=>{
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleCoClink=()=>{
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExClink=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleClearClink=()=>{
        let newText='';
        setText(newText)
    }
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const [text,setText]=useState('')
  return (
    <div>
  
<div className="mb-3">
  <label htmlforName="mybox" className="form-label"><h2>Enter the text to analyze:</h2></label>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
</div>
<button  type="button" className="btn btn-primary mx-1" onClick={handleUpClink}>Uppercase</button>
<button type="button" className="btn btn-primary mx-1" onClick={handleLoClink}>Lowercase</button>
<button type="button" className="btn btn-primary mx-1" onClick={handleCoClink}>Copy Text</button>
<button type="button" className="btn btn-primary my-1 mx-1" onClick={handleExClink}>Remove Extra Space</button>
<button type="button" className="btn btn-primary my-1 mx-1" onClick={handleClearClink}>Claer Text</button>
<div className="container my-3">
<h5>Your Text Summary</h5>
<p>{text.split(" ").length} words and {text.length} Character</p>
<p>{0.008*text.split(" ").length} Minutes read</p>
</div>
<div className="container my-3">
    <h4>Preview</h4>
    <p>{text}</p>
    
</div>
<div className="container">
<div className="mb-3">
 
  <textarea className="form-control"  id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
</div>
    </div>
  )
}

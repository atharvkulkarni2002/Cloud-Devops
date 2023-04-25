import React, {useState } from "react";

import PropTypes from "prop-types";
import { clear } from "@testing-library/user-event/dist/clear";



export default function TextForm(props) {
  const [text, setText] = useState("");
   const UpperCase = ()=>{
      console.log("UpperCase Clicked")
      let newText = text.toUpperCase()
     
      setText(newText)

     props.showAlert("Converted to upper case!","success")
   }
   const LowerCase = ()=>{
      console.log("LowerCase Clicked")
      let newText = text.toLowerCase()
      setText(newText)
      props.showAlert("Converted to lower case!","success")

   }
   const clear = ()=>{
      console.log("text area cleared")
      let newText = ""
      setText(newText)
      props.showAlert("Text has been cleared !","success")

   }

   const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

   const change = (event)=>{
    console.log("changed")
    setText(event.target.value)
 }
   const Bold = ()=>{
    console.log("changed")
    let newText =text.
    setText()
 }
  return (
    <>
    
<div className="container" style={{color: props.Mode==='dark'?'white':'black'}}>
      <h1 style={{color: props.Mode==='dark'?'white':'black'}}>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          rows="10"
          onChange={change}
        ></textarea>
      </div>

      <button className="btn btn-primary mx-2" onClick={UpperCase}>Convert To Upper Case</button>
      <button className="btn btn-primary mx-2"  onClick={LowerCase}>Convert To Lower Case</button>
      <button className="btn btn-primary mx-2"  onClick={clear}>Clear</button>

      <button type="submit" onClick={speak} className="btn btn-warning mx-2">Speak</button>
    

    </div>
      
    <div className="container my-2" style={{color: props.Mode==='dark'?'white':'black'}}>
      <h2>Your Summary</h2>
      <p>{text.split(" ").length-1} Words, {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes to Read text</p>
      <h2>Preview</h2>
      <p >{text.length>0?text:"Enter something in the textbox to preview it"}</p>

    </div>
    </>
  );
}

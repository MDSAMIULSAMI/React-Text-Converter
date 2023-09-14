import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState('Enter Text....');

  const handleUpClick = () => {
    console.log("Uppercase was Clicked >>" + text);
    let newText = text.toUpperCase();
    console.log("Upper Case Result >> "+newText);
    setText(newText);
  };
  const handleLowClick = () => {
    console.log("Lowercase was Clicked >>" + text);
    let newText = text.toLowerCase();
    console.log("Lowercase Result >> "+newText);
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
    // console.log("New Text: ",text);
  };
  const clearAll = () =>{
    console.log("Clear All Context");
    setText("");
  }
  return (
    <React.Fragment>
      <div className="mb-3">
        {/* ... */}
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="18"
        ></textarea>

        <div className="d-flex gap-2 my-4">
          <button
            className="btn btn-primary"
            onClick={handleUpClick}
            type="button"
          >
            Convert to Uppercase
          </button>
          <button
            className="btn btn-primary"
            onClick={handleLowClick}
            type="button"
          >
            Convert to Lowercase
          </button>
          <button className="btn btn-primary" onClick={clearAll} type="button">
            Clear
          </button>
        </div>
        <div className="textinfo my-2">
          <h1>Text Data</h1>
          <p>{text.trim().split(/\s+/).length} words, {text.length} Characters</p>
          <p>{0.008*(text.trim().split(/\s+/).length)} Minutes to Read</p>
        </div>
      </div>
    </React.Fragment>
  );
}

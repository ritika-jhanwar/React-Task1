import React from "react";
import { useState } from "react";
import "./word.css";

export default function WordCounter() {
  const [text, setText] = useState("");
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="container my-5 p-4">
      <center>
        <h1 className="mb-4">Responsive Paragraph Word Counter</h1>
      </center>
      <center>
        <textarea
          name="form-control"
          id="counter"
          cols="40"
          rows="8"
          value={text}
          onChange={handleTextChange}
        ></textarea>
      </center>
      <p className="mt-4 mx-5">
        Word Count: {text ? text.split(" ").length : 0}
      </p>
    </div>
  );
}

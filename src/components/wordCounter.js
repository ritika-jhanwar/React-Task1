import React from 'react'
import {useState} from "react";
export default function WordCounter() {
    const [text,setText]=useState('');
    const containerStyle={
        width:'45%',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Roboto Slab, serif',
        fontSize:'1.3rem'
    }
    const headingStyle={
        fontSize:'3.5rem'
    }
    const handleTextChange = (e) => {
        setText(e.target.value);
    }
  return (
    <div className='container my-5 p-4' style={containerStyle}>
        <center><h1 className='mb-4' style={headingStyle}>Responsive Paragraph Word Counter</h1></center>
        <center><textarea name="form-control" id="counter" cols="58" rows="8" value={text} onChange={handleTextChange}></textarea></center>
        <p className='mt-4 mx-5 fs-3'>Word Count: {text?(text.split(" ").length):0}</p>
    </div>
  )
}

//import React, { useEffect, useState } from "react";
import "./App.css";
import React, { useState } from 'react';

function Input() {
   const [text, setText] = useState('Тише, мыши, кот на крыше!');

   function changeText(event) {
      setText(event.target.value);
   }

   return <div>
      <input value={text} onChange={changeText} />
      <p>Текст в inpute: {text}</p>
   </div>;
}

export default Input;
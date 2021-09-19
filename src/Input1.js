import "./App.css";
import React, { useState } from 'react';

function Input1() {
   const [text1, setText1] = useState('');

   function changeText1(event) {
      setText1(event.target.value);
   }

   return <div>
      <h1> Тестирование react</h1>
      <label id="labelt" data-testid="label"> Введите сумму </label>
      
       {/* Для запуска теста нужно дописать  data-testid="test"*/}
      <input id="inpt" data-testid="input" value={text1} onChange={changeText1} placeholder="Введите сумму..." /> 

      {<span className="error" data-testid="error-msg">Введите сумму товара.</span>}

      <p id="text"> Текст в inpute: {text1}</p>
      <p className="ttt">Текст на странице</p>
   </div>;
}

export default Input1;
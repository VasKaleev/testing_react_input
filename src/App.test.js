import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react'

import Input1 from './Input1';

describe("events",()=>{
   //.toMatchSnapshot(), проверяет, совпадает ли результат рендеринга компоненты с эталонным снепшотом.
   // Если эталона ещё нет, то при первом выполнении теста он будет создан.
   //Проверка наличия <input> в снимке страницы проекта
   test('Проверка наличия поля ввода input', () => {
   render(<Input1 />);
   expect(<input />).toMatchSnapshot();
  });
    //Тестирование страницы react c помощью библиотеки @testing-library/react
   //import { render, screen, fireEvent } from '@testing-library/react';
   test('Проверка наличия поля ввода Input1', () => {
    render(<Input1 />);
    const inputEl = screen.getByTestId("input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("id", "inpt");
    expect(screen.getByPlaceholderText(/Введите/i)).toBeInTheDocument();
    expect(screen.queryByText(/150.00/i)).toBeNull();
  });
  test('Проверка наличия label', () => {
    render(<Input1 />);
    const inputEl = screen.getByTestId("label");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("id", "labelt");
    expect(screen.getByText("Тестирование react")).toBeInTheDocument();
    expect(screen.getByText(/естирование reac/i)).toBeInTheDocument();
  });

  test('Проверка наличия ClassName в тэге p', () => {
    render(<Input1 />);
     expect(screen.getByText(/Текст на странице/)).toHaveClass('ttt');
  });

  test('Проверка наличия id в тэге p', () => {
    render(<Input1 />);
    expect(screen.getByText(/Текст в inpu/i)).toHaveAttribute("id", "text");
  });

  //Тестирование страницы react c помощью библиотеки @testing-library/user-event
  //import userEvent from '@testing-library/user-event'; 
  test('Проверка ввода суммы оплаты в поле input', () => {
    render(<Input1 />);
    const inputEl = screen.getByTestId("input");
    userEvent.type(inputEl, "120.01");
    expect(screen.getByTestId("input")).toHaveValue("120.01");
    expect(screen.queryByTestId("error-msg")).toBeInTheDocument();
  });
  test('Проверка ввода неверной суммы оплаты в поле input', () => {
    render(<Input1 />);
    const inputEl = screen.getByTestId("input");
    userEvent.type(inputEl, "500.09");
    expect(screen.getByTestId("input")).toHaveValue("500.09");
    expect(screen.queryByTestId("error-msg")).toBeInTheDocument();
    expect(screen.queryByTestId("error-msg").textContent).toEqual("Введите сумму товара.");
  });
  //Тестирование страницы react c помощью библиотеки fireEvent
 //import { render, screen, fireEvent } from '@testing-library/react'; 
 it('Тестирование поля ввода input1 ', ()=>{
  render(<Input1 />);
  expect(screen.getByPlaceholderText(/Введите/i)).toBeInTheDocument();
  expect(screen.getByRole('textbox')).toBeInTheDocument();
  expect(screen.getByRole('textbox')).toHaveAttribute('id','inpt');
  expect(screen.queryByText(/150.00/i)).toBeNull();
  fireEvent.change(screen.getByRole('textbox'),{
   target: {value: '100.00'}
 });
 expect(screen.queryByText(/100.00/i)).toBeInTheDocument();
 });

//Ещё один вариант
//Тестирование страницы react c помощью библиотеки fireEvent
 //import { render, screen, fireEvent } from '@testing-library/react'; 
 it('Тестирование поля ввода input еще один вариант', ()=>{
  render(<input />);
  expect(screen.queryByText(/250.00/i)).toBeNull();
  fireEvent.change(screen.getByRole('textbox'),{target: {value: '200.00'}}
  );
 expect(screen.getByRole('textbox')).toHaveValue("200.00");
 });

});



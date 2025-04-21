import React, { useState } from 'react'
import './Input.css'

function Input() {
  let [length,setLength]=useState(0);
  let [password,setPassword]=useState("");
  let [symbols,setSymbols]=useState(false);
  let[numbers,setNumbers]=useState(false);
  let[capital,setCapital]=useState(false);
  const handleSymbolsChecked=(e)=>{
    setSymbols(e.target.checked)
  }
  const handleNumbersChecked=(e)=>{
    setNumbers(e.target.checked)
  }
  const handleCapitalChecked=(e)=>{
    setCapital(e.target.checked)
  }
  const setValue=function(event){
    setLength(event.target.value)
  }
  function generate(length){
    password=""
    const Allcharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    const Onlycharacters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const charactersWithno='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const alphabetsmall='abcdefghijklmnopqrstuvwxyz'
    const capsSymbol='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+[]{}|;:,.<>?'
    const capsNo='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
    const smallNoSymbol='abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+[]{}|;:,.<>?'
    const smallSymbol='abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+[]{}|;:,.<>?'
    const smallNo='abcdefghijklmnopqrstuvwxyz1234567890'
    for(let i=0;i<length;i++){
      if(symbols==true && numbers==true && capital==false){
        const randomIndex=Math.floor(Math.random()*smallNoSymbol.length);
        password+=smallNoSymbol[randomIndex]
      }
      else if(symbols==false && numbers==true && capital==true){
        const randomIndex=Math.floor(Math.random()*capsNo.length);
        password+=capsNo[randomIndex]
      }
      else if(symbols==true && numbers==false && capital==true){
        const randomIndex=Math.floor(Math.random()*capsSymbol.length);
        password+=capsSymbol[randomIndex]
      }
      else if(symbols==false && numbers==false && capital==false){
        const randomIndex=Math.floor(Math.random()*alphabetsmall.length);
        password+=alphabetsmall[randomIndex]
      }
      else if(symbols==true && numbers==false && capital==false){
        const randomIndex=Math.floor(Math.random()*smallSymbol.length);
        password+=smallSymbol[randomIndex]
      }
      else if(symbols==false && numbers==false && capital==true){
        const randomIndex=Math.floor(Math.random()*Onlycharacters.length);
        password+=Onlycharacters[randomIndex]
      }
      else if(symbols==false && numbers==true && capital==false){
        const randomIndex=Math.floor(Math.random()*smallNo.length);
        password+=smallNo[randomIndex]
      }
      else if(symbols==false && numbers==true && capital==true){
        const randomIndex=Math.floor(Math.random()*charactersWithno.length);
        password+=charactersWithno[randomIndex]
      }
      else{
        const randomIndex=Math.floor(Math.random()*Allcharacters.length);
        password+=Allcharacters[randomIndex]
      }
    }
    return password;
  }
  function clickHandler(){
    let newPassword=generate(length)
    setPassword(newPassword)
    newPassword=""
  }

  return (
    <div className='Form'>
        <label htmlFor='length'>The length of your password: </label>
        <input 
            type='number' 
            placeholder='Length of password' 
            min={5}
            max={12}    
            onChange={setValue}         
        />
        <br/>
        <div className='checkers'>
          <label htmlFor="symbols">Symbols</label>
          <input 
              id='symbols'
              type='checkbox' 
              checked={symbols}
              onChange={handleSymbolsChecked}      
          />
          <br/>
          <label htmlFor='Numbers'>Numbers</label>
          <input 
              id='Numbers'
              type='checkbox' 
              checked={numbers}
              onChange={handleNumbersChecked}           
          />
          <br/>
          <label htmlFor='Capital'>Capital</label>
          <input 
              id='Capital'
              type='checkbox' 
              checked={capital}
              onChange={handleCapitalChecked}           
          />
        </div>
        <button name='submit' onClick={clickHandler}>Submit</button>
        <p style={{fontSize:"12px"}}>Your generated password is: <strong>{password}</strong></p>
        
    </div>
  )
}

export default Input
import { useState } from 'react'
import './App.css'

function App() {

  const [screenDisplay, setScreenDisplay] = useState("0");
  const [expression, setExpression]= useState("");
  const [isFirstDigit, setFirstDigit] = useState (false);
  const [smallScreenDisplay, setSmallScreenDisplay] = useState("0");

  function display(value)
  {
    const last = expression.at(-1);

    if(!"%*-+0/".includes(value))
      {
        setFirstDigit(false);
      }

    if("%*-+./".includes(last)&&"%*-+./".includes(value))
      {
        return;
      }
    else if ("%*-+/".includes(last)&&value==="0" || isFirstDigit === true && "%*-+0/".includes(value))
      {
        return;
      }

    const result = expression+value;
    setExpression(result);
    setScreenDisplay(result);


      if("%*-+/".includes(value))
      {
        setSmallScreenDisplay(expression);
      }
  }

  function clear()
  {
    setExpression("");
    setSmallScreenDisplay("0");
    setScreenDisplay("0");
    setFirstDigit(true);
  }
  function calculate()
  { 
    try {
      const result = eval(expression);
      setScreenDisplay(result.toString());
      setExpression(result.toString());
      setSmallScreenDisplay(expression);
      
    } catch (error) {
      setScreenDisplay("ERROR");
      setExpression("");
    } 
  }

  function backspace()
  {
    const result = expression.slice(0,-1);
    setExpression(result);
    setScreenDisplay(result);
    // console.log(expression);
  }

  return (
    <>
      <div id="screen">
        <p id='smallScreen'>{smallScreenDisplay}</p>
        <h1 id='solution'>{screenDisplay}</h1>
          
      </div>
      <div className="row">
          <button className = "keys" onClick={() => display("%")}>%</button>
          <button className = "keys">CE</button>
          <button className = "keys" onClick={() => clear()}>C</button>
          <button className = "keys" id="clear" onClick={() => backspace()}>
            <svg
              viewBox="0 0 25 25"
              width="25"
              height="25"
              fill="none"
              stroke="white"
              strokeWidth="2"
              >
                <path d="M4 6 L9 19 H21 V6 Z" />
                <path d="M12 9 L17 16 M17 9 L12 16" />
            </svg>
          </button>

          <button className = "keys" onClick={() => display("7")}>7</button>
          <button className = "keys" onClick={() => display("8")}>8</button>
          <button className = "keys" onClick={() => display("9")}>9</button>
          <button className = "keys" onClick={() => display("/")}>/</button>

          <button className = "keys" onClick={() => display("4")}>4</button>
          <button className = "keys" onClick={() => display("5")}>5</button>
          <button className = "keys" onClick={() => display("6")}>6</button>
          <button className = "keys" onClick={() => display("*")}>*</button>

          <button className = "keys" onClick={() => display("3")}>3</button>
          <button className = "keys" onClick={() => display("2")}>2</button>
          <button className = "keys" onClick={() => display("1")}>1</button>
          <button className = "keys" onClick={() => display("+")}>+</button>

          <button className = "keys" id="enter"  onClick={() => calculate()}>=</button>
          <button className = "keys" onClick={() => display("0")}>0</button>
          <button className = "keys" onClick={() => display(".")}>.</button>
          <button className = "keys" onClick={() => display("-")}>-</button>
      </div>
    </>

  )
}

export default App

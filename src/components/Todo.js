import React, { useState } from "react";
import Todo2 from "./Todo2";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
      if(inputText===""){
          return null;
      }
      else{
        setItems(prevItems => {
            return [...prevItems, inputText];
          });
      }
   
    setInputText("");
  }
function handleCheck(id){
    setItems(function (prevItems) {
        return prevItems.filter(function (inputText, index) {
          return index !== id;
        });
      });
}
  return (
    <div className="container">
      <div className="heading">
        <h1>Today plan</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem,index) => (
          <Todo2 key={index} id={index} text={todoItem} onCheck={handleCheck} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

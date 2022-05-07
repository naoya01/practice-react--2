import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const InputTodo = () => {};
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(['aaa','iii']);
  const [completeTodos, setcompleteTodos] = useState(['uuu']);
  const onChangeTodoText = (event) => setTodoText(event.target.value)
  return (
    <>
      <div className="App">
        <div className="input-area">
          <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText}></input>
          <button onClick={InputTodo}>追加</button>
        </div>

        <div className="incomplete-area">
          <p className="title">未完了のTODO</p>
          <ul>
            {incompleteTodos.map((todo) => {
              return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={InputTodo}>完了</button>
              <button onClick={InputTodo}>削除</button>
            </div>
              );
            })}
          </ul>
        </div>

        <div className="complete-area">
          <p className="title">完了のTODO</p>
          <ul>
            {completeTodos.map((todo) => {
              return(
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={InputTodo}>完了</button>
              <button onClick={InputTodo}>削除</button>
            </div>
              );
            })}

          </ul>
        </div>
      </div>
    </>
  );
}

export default App;

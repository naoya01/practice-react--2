import logo from './logo.svg';
import './App.css';

function App() {
  const InputTodo = () => {

  }

  return (
    <div className="App">
      <input placeholder='TODOを入力'
      ></input>
      <button onClick={InputTodo}>追加</button>
    </div>
  );
}

export default App;

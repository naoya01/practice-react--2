
import axios from "axios";
import logo from './logo.svg';
import './App.css';

function App() {
  const onClickUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
      console.log(res);
    });
  }
  const onClickUsers1 = () => {
    alert("user1");
  }
  return (
    <div className="App">
        <button onClick={onClickUsers}>users</button>
        <button onClick={onClickUsers1}>id=1のuser</button> 
    </div>
  );
}

export default App;

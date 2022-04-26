import { BrowserRouter, Link} from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { Router } from "./router/Router";
import "./App.css";
import { SearchInput } from "./components/molecules/SearchInput";


function App() {
  return (
    <>
    <PrimaryButton>テスト</PrimaryButton>
    <SecondaryButton>検索</SecondaryButton>
    <br/>
    <SearchInput />

    <BrowserRouter>
      <div className="App">
      <Link to={"/"}>Home</Link><br/>
      <Link to={"/page1"}>Page1</Link><br/>
      <Link to={"/page2"}>Page2</Link><br/>
      </div>
      
      <Router />

    </BrowserRouter>
    </>
  );
}

export default App;

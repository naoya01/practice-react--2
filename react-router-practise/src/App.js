import { BrowserRouter, Link} from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { Router } from "./router/Router";
import "./App.css";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/ organisms/user/UserCard";

const user = {
  name: "じゃけえ",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "12345.com",
  phone: "000-0000-0000",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

function App() {
  return (
    <>
    <PrimaryButton>テスト</PrimaryButton>
    <SecondaryButton>検索</SecondaryButton>
    <br/>
    <SearchInput />
    <UserCard user={user}/>

    {/* <BrowserRouter>
      <div className="App">
      <Link to={"/"}>Home</Link><br/>
      <Link to={"/page1"}>Page1</Link><br/>
      <Link to={"/page2"}>Page2</Link><br/>
      </div>
      
      <Router />

    </BrowserRouter> */}
    </>
  );
}

export default App;

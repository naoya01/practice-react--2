import styled from "styled-components";
import { UserCard } from "../ organisms/user/UserCard";
import { SearchInput } from "../molecules/SearchInput";

import {useLocation} from "react-router-dom"

const users = [...Array(10).keys()].map(((val) => {
  return{
    id: val,
    name: `じゃけえ${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "12345.com",
    phone: "000-0000-0000",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  };
}));

export const Users = () => {
  const {state} = useLocation();
  const isAdmin = state ? state.isAdmin : false;
  return(
    <SContainer>
       <h2>ユーザー一覧</h2>
       <SearchInput/>
       <SUserArea> 
        {users.map((obj) => (
          <UserCard key={obj.id} user={obj} isAdmin={isAdmin}/>
        ))}
       </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 25px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  grid-gap: 20px;
`
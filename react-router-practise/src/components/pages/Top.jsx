import { useContext } from "react";
import {useNavigate} from "react-router-dom"
import styled from "styled-components";
import { UserContext } from "../../providers/UserProvider";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { DefaultLayout } from "../templates/DefaultLayout";
export const Top = () => {
  const navigate = useNavigate();
  const {setUserInfo} = useContext(UserContext);

  
  const onClickadmin = () => navigate("/users", {state:{ isAdmin: true }});
  const onClickGeneral = () =>  navigate("/users", {state:{ isAdmin: false }});
  return(
      <SContainer>
        <h2>Topページです</h2>
        <SecondaryButton onClick={onClickadmin}>管理者ユーザー</SecondaryButton>
        <br />
        <br />
        <SecondaryButton onClick={onClickGeneral}>管理者ユーザー</SecondaryButton>
      </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
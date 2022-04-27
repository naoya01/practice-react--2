import { BrowserRouter, Link,useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Top } from "../../pages/Top";
import { Users } from "../../pages/Users";
export const Header = () =>{

  return(
    <BrowserRouter>
    <SHeader>

      <SLink to = "/">HOME</SLink>
      <SLink to = "/users">USERS</SLink>

    </SHeader>
    </BrowserRouter>
  );
};

const SHeader = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 10px 0px;
`;
const SLink = styled(Link)`
  margin: 0 8px;
`;

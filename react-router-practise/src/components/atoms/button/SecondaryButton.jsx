import styled from "styled-components"

export const SecondaryButton = (props) => {
  const {children} = props;
  return(
    <SButton>{children}</SButton>
  );
};

const SButton = styled.button`
  background-color: #40519a;
  color: #fff;
  text-align: center;
  margin: auto;
  padding: 10px 20px;
  display: block;
  transition: 0.2s;
  border-radius: 15px;
  &:hover{
    opacity: 0.8;
    transition: 0.2s;
    border-radius: 25px;
  }
`
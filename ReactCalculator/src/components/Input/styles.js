import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  background-color: rgb(48, 48, 48);
`;

export const InputContent = styled.input`
  width: 100%;
  border: none;
  padding: 15px;
  font-size: 85px;
  background-color: rgb(48, 48, 48);
  text-align: right;
  color: #ffffff;

  &::placeholder {
    color: #ffffff;
    opacity: 0.9;
  }
`;

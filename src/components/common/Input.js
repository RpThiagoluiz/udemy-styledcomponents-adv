import styled from "styled-components";

export const Input = styled.input`
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1.2rem;
  margin-bottom: 8px;
  width: 100%;
  box-sizing: border-box;
  height: 40px;
  color: red;

  &::placeholder {
    color: #ccc;
  }
`;

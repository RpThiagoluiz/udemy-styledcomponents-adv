import styled, { css } from "styled-components";

export const Button = styled.button`
  color: white;
  //Se o botao tiver um secondary, tera um cor caso nao tera outra.
  background: ${({ secondary }) => (secondary ? "purple" : "#f8049c")};
  font-weight: bold;
  //padding: ${(props) => (props.large ? "16px" : "8px")};

  //Bad code
  //${(p) => (p.large ? "padding:8px;font-size:1.5rem" : "")}

  //Nice code
  ${(p) =>
    p.large
      ? css`
          padding: 10px;
          border-radius: 5px;
          font-size: 1.5rem;
        `
      : css`
          padding: 8px;
          border-radius: 4px;
          font-size: 1rem;
        `}

  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: none;
  // Porps para o button -> background: ${(props) => props.color};
  & + button {
    margin-bottom: 1.75rem;
  }

  &:disabled {
    background: #eee;
    color: #666;
  }
`;

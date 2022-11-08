import styled, { css } from "styled-components";

interface ButtonProps {
  variant?: string;
}

export const StyledButton = styled.button<ButtonProps>`
  padding: 7px 10px;
  outline: none;
  background-color: #222;
  border: 1px solid orange;
  border-radius: 5px;
  cursor: pointer;
  margin: 2px;
  color: #fff;
  transition: 500ms all;

  &:hover {
    background-color: #fff;
    border-color: #222;
    color: #222;
  }

  ${({ variant }) => variant === "desable" &&

    css`
      background-color: #aaa;
      color: #555;
      border: none;
      pointer-events: none;
      opacity: 0.5;
    `

  }

  
`;
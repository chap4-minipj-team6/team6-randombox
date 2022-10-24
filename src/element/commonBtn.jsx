import React from 'react';
import styled, { css } from 'styled-components';

const Button = (props) => {
  return (
    <StButton {...props} disabled={props.disabled}>
      {props.children}
    </StButton>
  );
};
export default Button;

const StButton = styled.button`
  border-radius: 20px;
  border: none;
  background-color: #ffcd29;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  //text-transform: uppercase;
  //transition: transform 80ms ease-in;
  text-decoration-line: none;

  &:active {
    transform: scale(0.95);
  }
  &:hover {
    cursor: pointer;
  }

  &:focus {
    //background: var(--button-hover-bg-color, #ffcd29); //누를때
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #025ce2);
  }

  ${({ size }) => {
    switch (size) {
      case 'lg':
        return css`
          width: 200px;
          height: 50px;
          background-color: #646464;
        `;
      case 'md':
        return css`
          width: 145px;
          height: 45px;
        `;
      case 'sm':
        return css`
          width: 30px;
          height: 30px;
        `;
      default:
        return css`
          width: 120px;
        `;
    }
  }}
`;

//import Button from "../element/button";

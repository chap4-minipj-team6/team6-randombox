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
  margin: 0;
  border: none;
  cursor: pointer;
  font-family: 'ghanachoco';
  font-size: var(--button-font-size, 1rem);
  //padding: var(--button-padding, 12px 16px);
  border-radius: var(--button-radius, 8px);
  background: var(--button-bg-color, #82b0fb);
  color: var(--button-color, #ffffff);

  &:active,
  &:hover {
    background-color: #e8bda6;
    color: White;
  }

  &:focus {
    background: var(--button-hover-bg-color, #ffa97b); //누를때
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
          width: 90%;
          height: 50px;
        `;
      case 'md':
        return css`
          width: 100px;
        `;
      case 'sm':
        return css`
          width: 30px;
          height: 30px !important;
          background-color: bisque;
        `;
      default:
        return css`
          width: 120px;
        `;
    }
  }}
`;

//import Button from "../element/button";

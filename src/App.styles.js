import styled from "styled-components";
import breakpoints from "./breakpoints.styles";

export const Heading = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-size: 32px;
  line-height: 32px;
  font-weight: 600;
  margin: 20px 0 10px;

  ${breakpoints.mobile`
        font-size: 24px;
        line-height: 24px;
        margin: 20px 0 5px;
    `};
`;

export const SubHeading = styled.h2`
  text-align: center;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 400;
  margin: 0;

  ${breakpoints.mobile`
        font-size: 14px;
    `};
`;

export const TodoWrapper = styled.div`margin: 20px auto;`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  padding: 20px 0;

  ${breakpoints.mobile`
        flex-direction: column;
    `};
`;

export const Label = styled.label`
  margin-right: 8px;

  ${breakpoints.mobile`
        margin-right: 0x;
        margin-bottom: 10px;
    `};
`;

export const Input = styled.input`
  padding: 8px 4px;
  font-size: 16px;
  min-width: 400px;

  ${breakpoints.mobile`
        min-width: 90%;
        margin-bottom: 10px;
        box-sizing: border-box;
    `};
`;

export const SubmitButton = styled.input`
  font-size: 14px;
  padding: 10px 8px;
  background-color: #000;
  border: 1px dashed #ccc;
  margin-left: 8px;
  color: #fff;
  font-weight: 700;
  transition: border 0.2s;

  &:hover {
    border: 1px dashed #fff;
    transition: border 0.2s;
    cursor: pointer;
  }

  ${breakpoints.mobile`
        display: block;
        width: 90%;
        box-sizing: border-box;
        margin-left: 0;
    `};
`;

export const FormRow = styled.div`
  display: flex;
  align-items: center;

  ${breakpoints.mobile`
        flex-direction: column;
        width: 100%;
    `};
`;

export const ListWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  background-color: ${props => (props.parity ? "#000" : "#fff")};

  & button {
    background-color: ${props => (props.parity ? "#000" : "#fff")};
    border-width: 1px;
    border-style: dashed;
    border-color: ${props => (props.parity ? "#ccc" : "#888")};
    color: ${props => (props.parity ? "#fff" : "#000")};
    font-size: 14px;
    padding: 10px 8px;
    font-weight: 700;
    text-transform: uppercase;
    margin-right: 8px;
    transition: border-color 0.2s;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      cursor: pointer;
      border-color: ${props => (props.parity ? "#fff" : "#000")};
      transition: border-color 0.2s;
    }
  }
`;

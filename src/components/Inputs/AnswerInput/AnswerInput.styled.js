import styled from "styled-components";
import { SContainer, SInput, SInputWrapper } from "../Input/Input.styled";

export const SAnswerInputWrapper = styled(SInputWrapper)`
  border: .0625rem solid #ffffff;
  background-color: transparent;  
  border: none;
  outline: .0625rem solid #ffffff;
  &:focus-within {
    background-color:transparent;
    box-shadow: none;
    outline: .0625rem solid #2984ce;
  }
`
export const SAnswerInput = styled(SInput)`
  width: ${({width})=>width ? width : '47rem'};
  height: ${({height})=>height ? height : '3rem'};
  color: white;
`

export const SAnswerContainer = styled(SContainer)`
  width: fit-content;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
`
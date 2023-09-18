import styled from "styled-components";

export const STextarea = styled.textarea`
  width: ${({ width }) => (width ? width : "41.3125rem")};
  height: ${({ height }) => (height ? height : "8.6875rem")};
  border: 0.0625rem solid #ffffff;
  border-radius: 0.625rem;
  padding: 1.0625rem 1.25rem;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "3.5rem")};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#ffffff")};
  color: ${({ color }) => color};
  resize: ${({ resize }) => (!resize ? "none" : "both")};
  &:focus {
    outline: none;
    border: 0.0625rem solid #2984ce;
  }
  &::placeholder {
    font-family: "FiraGO";
  }
`;
export const STextareaDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

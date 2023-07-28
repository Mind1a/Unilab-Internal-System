import styled from "styled-components";

export const SProjectInfoContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 19.5625rem;
  width: 67.375rem;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='30' ry='30' stroke='%233F48CC' stroke-width='2' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  margin: 3.0625rem 0;
`;
export const SDateDiv = styled.div`
  position: absolute;
  transform: rotate(-90deg);
  left: -3.75rem;
`;
export const SProjectInfoDiv = styled.div`
  display: flex;
  border-radius: 1.875rem;
`;
export const SImage = styled.img`
  width: 14.5625rem;
  height: 14.5625rem;
  object-fit: cover;
`
export const STitleAndRoleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: red;
  height: 3.5rem;
`
export const SProjectTitle = styled.p`
  color: #3F48CC;
  font-size: 1.1875rem;  
  font-weight: 500;
`
export const SProjectRole = styled(SProjectTitle)`
  font-size: 1.125rem;
  font-weight: 400;
`
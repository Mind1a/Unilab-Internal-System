import styled from "styled-components";

export const SThirdHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  padding: 0 4.5rem;
  min-height: 10.5rem;
  box-shadow: 0rem 0rem 0.125rem 0.063rem #ecececd4;
`;
export const SIconPairPart = styled.div`
  width: 100%;
`;

export const SHomePart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const SHomePartTitle = styled.p`
  color: white;
  font-size: 1.1rem;
  font-weight: 400;
`;

export const SHomePartIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`;

export const SRegistrationPart = styled.div`
  width: 100%;
  justify-content: flex-end;
  display: flex;
  gap: 2rem;
`;

export const SRegistrationPartIcon = styled.img`
  cursor: pointer;
`;

SRegistrationPartIcon.defaultProps = {
  src: "assets/svg/log-in.svg",
};

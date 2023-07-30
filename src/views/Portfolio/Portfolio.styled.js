import styled from "styled-components";
import { SCourseTitle } from "../EditCourse/EditCourse.styled";

export const SPortfolioMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Noto Sans Georgian', sans-serif;
  & * {
    font-family: inherit;
  }

`

export const STitle = styled(SCourseTitle)`
`

export const SSecondaryTiTle = styled.h2`
  font-weight: 700;
  font-size: 1.625rem;
  color: #4980C0;
`
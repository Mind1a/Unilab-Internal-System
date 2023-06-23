import styled from 'styled-components';

export const SMultipleOptionDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: .5625rem 1.1rem .5rem .5625rem;
  width: ${({width})=>width};
  min-height: 2.55rem;
  gap: .3125rem;
`
export const SNameSpan = styled.span`
  background-color: #EFEFEF;
  color: #353535;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: .3125rem .6875rem .375rem .5rem;
  outline: .0625rem solid #D1D1D1;
  border-radius: .25rem;
  font-size: .75rem;
  max-height: 1.5rem;

  &>img{
    margin-left: .5625rem;
    width: .75rem;
    height: .75rem;
  }
`
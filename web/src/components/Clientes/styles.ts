import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5rem;
  h1{
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 52px;
    text-align: center;
    color: #212529;
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  div{
    display: flex;
    gap: 9rem;
    padding-bottom: 8rem;
  }
`
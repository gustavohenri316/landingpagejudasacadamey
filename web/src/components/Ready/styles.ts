import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 5rem;
  
  h1{
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 52px;
    color: #212529;
    padding-bottom: 5rem;
  }
  
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  span{
    width: 626px;
    height: 330px;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    color: #495057;
  }
`
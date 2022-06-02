import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  width: 100%;
  height: 734px;
  background: #FFFAF1;
  justify-content: center;
`
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  img{
    width: 480px;
    height: 414px;
  }
  h4{
    font-weight: 700;
    font-size: 14px;
    color: #00856F;
  }
  h2{
    width: 447px;
    height: 104px;
    font-weight: 700;
    font-size: 40px;
    color: #212529;
    padding-bottom: 2rem;
  }
  p{
    padding-top: 2rem;
    width: 573px;
    height: 96px;
    font-weight: 400;
    font-size: 18px;
    color: #212529;
  }
`
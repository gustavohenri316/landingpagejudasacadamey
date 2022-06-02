import styled from "styled-components";

export const Page = styled.div`
  margin-top: 5rem;
  width: 100%;
  height: 699px;
  background: #FFFAF1;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Conatiner = styled.div`
  display: flex;
  justify-content: center;
  gap: 16.5rem;
  .hero-image{
    width: 575px;
    height: 379px;
  }
  .container-principal{
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .container-principal h1{
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 52px;
    color: #212529;
  }
  .container-info{
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  .container-info p{
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #495057;
  }
  a{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 286px;
    height: 50px;
    border: none;
    background: #00856F;
    border-radius: 40px;
    cursor: pointer;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    color: #FFFFFF;
  }
  a:hover{
    background: #00453A;
  }
`
import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
  width: 100%;
  height: 1328px;
  background: #FFFAF1;
  h1{
    padding-top: 5rem;
    font-weight: 700;
    font-size: 40px;
    line-height: 52px;
    color: #212529;
  }
  span{
    padding-top: 3rem;
    font-weight: 400;
    font-size: 22px;
    line-height: 150%;
    color: #495057;
    text-align: center;
  }
`
export const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  
  .container-principal{
    display: flex;
    align-items: center;
    gap: 5rem;
  }
  .container-secundario{
    width: 347px;
    height: 281px;
    background: #FFFFFF;
    border: 1px solid #DCE9E2;
    border-radius: 6px;
  }
  h2{
    padding-top: 1rem;
    padding-left: 2rem;
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
    color: #212529;
  }
  p{
    padding-top: 1rem;
    padding-left: 2rem;
    width: 299px;
    height: 120px;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #495057;
  }
  img{
    padding-top: 2rem;
    padding-left: 2rem;
  }
`
import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  justify-content: center;
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5rem;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  .text-title{
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    text-align: center;
    color: #212529;
  }
  .text-info{
    width: 1000px;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    text-align: center;
    color: #495057;
  }
  .painel{
    display: flex;
    gap: 5rem;
  }
  .painel-container{
    width: 347px;
    height: 303px;
    background: #FFFFFF;
    border: 1px solid #DCE9E2;
    border-radius: 6px;
    -moz-transition: all 0.3s;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
  }
  .painel-container:hover{
    -moz-transform: scale(1.2);
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
  }
  .painel-container img{
    padding-left: 2rem;
    padding-top: 1.5rem;
  }
  .painel-container h2{
    padding-left: 2rem;
    padding-top: 0.5rem;
    font-weight: 700;
    font-size: 24px;
    color: #212529;
  }
  .painel-container p{
    padding-left: 2rem;
    padding-top: 0.5rem;
    width: 299px;
    height: 168px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #495057;
  }
`
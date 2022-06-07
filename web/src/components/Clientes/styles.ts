import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12rem;
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
  @keyframes float {
      0%,
      100% {
        transform: translatey(0);
      }
      50% {
        transform: translatey(-20px);
      }
    }
  div img{
    cursor: pointer;
    -moz-transition: all 0.3s;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        animation: float 6s ease-in-out infinite;
  }
  div img:hover{
    -moz-transform: scale(1.2);
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
        animation: float 6s ease-in-out infinite;
        
  }
`
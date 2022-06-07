import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .info {
    position: relative;
    bottom: 6rem;
    display: flex;
    justify-content: space-evenly;
    width: 1120px;
    height: 210px;
    background: #fffaf1;
    border: 1px solid #dce9e2;
    border-radius: 6px;
  }
  .info-item {
    padding-top: 3.5rem;
  }
  .info-item h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    color: #212529;
  }
  .info-item p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #00856f;
  }
 
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 678px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dce9e2;
  h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #00856f;
    padding-bottom: 1rem;
  }
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 52px;
    color: #212529;
    width: 605px;
    height: 136px;
    margin-bottom: 3rem;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #495057;
    margin-bottom: 3rem;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 288px;
    height: 50px;
    background: #00856f;
    border-radius: 40px;
    border: none;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    color: #ffffff;
  }
  a:hover {
    background: #00453a;
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
  
  img {
    width: 520px;
    height: 430px;
    animation: float 6s ease-in-out infinite;
  }
`;

import styled from "styled-components";

export const Page = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
  .principal{
    margin-top:72px ;
    width: 100%;
    height: 268px;
    background: #FFFAF1;
    text-align: center;
    padding-top: 5rem;
  }
  .principal h1{
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 52px;
    color: #212529;
  }

  .filtro{
    width: 1120px;
    height: 210px;
    background: #00856F;
    border: 1px solid #DCE9E2;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    position: relative;
    bottom: 5rem;
  }
  .input input{
    width: 520px;
    height: 50px;
    left: 688px;
    top: 218px;
    background: #DCE9E2;
    border-radius: 40px;
    border: none;
  }
  button{
    width: 1050px;
    height: 50px;
    background: #DCE9E2;
    border-radius: 40px;
  }
  button:hover{
    background-color: #00453A;
  }
  .Vagas{
    width: 58vw;
    height: 70vh;
  }
  .vagas-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #212529;
    height: 70px;
  }
  .vagas-info{
    width: 400px;
    border-right: 1px solid #212529;
  }
  .vagas-info h4{
    color: #00453A;
    font-weight: 600px;
    font-size: 18px;
  }
  .vagas-info span{
    font-size: 14px;
    font-weight: 400;
  }
  .vagas-text{
  padding-right: 10px;
    border-right: 1px solid #212529;
  }
  .vagas-text span{
    color: #212529;
    font-size: 18px;
    font-weight: 400;
 
  }
  .vagas-text p{
    color: #00453A;
    font-size: 18px;
    font-weight: 500;
  }
  .vagas-tipe{
    width: 200px;
  }
  .button{
    color: #212529;
    text-transform: uppercase;
    font-weight: 700;
  }
`
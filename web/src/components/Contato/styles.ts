import styled from "styled-components";

export const Page = styled.div`
  margin-top: 5rem;
  width: 100%;
  height: 699px;
  background: #FFFAF1;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Container = styled.div`
  display: flex;
  gap: 18rem;
  .container-infos{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .container-infos h1{
    font-weight: 700;
    font-size: 40px;
    color: #212529;
    padding-bottom: 2rem;
  }
  .infos{
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  form{
    display: flex;
    flex-direction: column;
  }
  form input{
    width: 455px;
    height: 50px;
    background: #DCE9E2;
    border-radius: 40px;
    border: none;
  }
  form textarea{
    width: 455px;
    height: 166px;
    background: #DCE9E2;
    border-radius: 40px;
    border: none;
  }
  form label{
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    color: #495057;
  }
  button{
    margin-top: 2rem;
    width: 140px;
    height: 53px;
    background: #00856F;
    border-radius: 40px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    color: #FFFFFF;
  }
  button:hover{
    background-color:#00453A;
  }
`
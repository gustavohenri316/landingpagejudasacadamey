import styled from "styled-components";

export const Container = styled.div`
  position: fixed; 
  top: 0; 
  left: 0; 
  z-index: 9999; 
  width: 100%; 
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00856F;
  height: 72px;
  gap: 14.5rem;
  .logo h1{
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #FFFFFF;
  }
  .logo span{
    color: #000;
    font-weight: 500;
  }
  .nav{
    display: flex;
    gap: 3rem;
  }
  .nav a{
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #F7F9F9;
    text-decoration: none;
    height: 72px;
    align-items: center;
    text-align: center;
    display: flex;

  }
  .nav a:hover{
    border-bottom: 5px solid #FFFF;
  }
  .contato {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 115px;
    height: 38px;
    border: 1px solid #FFFFFF;
    border-radius: 40px;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    color: #FFFFFF;
    cursor: pointer;
  }
`
import styled from "styled-components";

export const Page = styled.div`
  position: absolute;
  width: 100%;
  height: 268px;
  background: #00856F;
`
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 3rem;
  gap: 18rem;
  .infos h2{
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #FFFFFF;
    padding-bottom: 2rem;
  }
  .infos p{
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #FFFAF1;
    padding-bottom: 1rem;
  }
  .midias{
    display: flex;
    gap: 2rem;
  }
  .midias img{
    cursor: pointer;
  }
`
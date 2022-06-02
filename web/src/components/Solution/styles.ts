import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
`
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5rem;
    h1{
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      text-align: center;
      color: #212529;
    }
    span{
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      text-align: center;
      color: #495057;
    }
    .container-principal{
      display: flex;
      align-items: center;
      gap: 5rem;
      padding-top: 5rem;
    }
    .container-infos{
      width: 347px;
      height: 255px;
      background: #FFFFFF;
      border: 1px solid #DCE9E2;
      border-radius: 6px;
    }
    .container-infos img{
      padding-top: 2rem;
      padding-left: 2rem;
    }
    .container-infos h2{
      padding-top: 1rem;
      padding-left: 2rem;
      font-weight: 700;
      font-size: 24px;
      color: #212529;
}
    .container-infos p{
      padding-top: 1rem;
      width: 299px;
      height: 120px;
      padding-left: 2rem;
      font-weight: 400;
      font-size: 16px;
      color: #495057;
    }
`
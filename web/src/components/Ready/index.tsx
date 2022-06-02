import ready from '../../assets/images-clientes/ready.png'
import { Container, Page } from './styles'
export const Ready = () => {
  return (
    <Page>
      <h1>Ready to Market</h1>
      <Container>
        <span>Aqui na JudasAcademy entendemos a importância do Time to Market de produtos digitais. <br /><br />
          Afinal, se seu plano de desenvolvimento não está alinhado com os prazos da sua estratégia de negócio, dificilmente sua solução terá sucesso. <br /><br />
          Conte com um parceiro especializado para te apoiar no desenvolvimento do seu software.
        </span>
        <img src={ready} />
      </Container>
    </Page>
  )
}

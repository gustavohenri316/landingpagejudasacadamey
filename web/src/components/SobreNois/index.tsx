import HeroSobre from '../../assets/images-clientes/hero-sobre.svg'
import { Container, Page } from './styles'

export const SobreNois = () => {
  return (
    <>
    <Page id='Sobre'>
      <Container>
        <img src={HeroSobre} />
        <div>
          <h4>SOBRE NÓS</h4>
          <h2>Entenda quem somos e por que existimos</h2>
          <p>Uma Solution Provider de TI focada no 
            mercado corporativo e financeiro. Desenvolvemos 
            softwares, plataformas multicloud para microsserviços, 
            integração e atualização de sistemas legados que irão 
            permitir que seu time tenha maior foco em seu negócio.
            </p>
        </div>
      </Container>
      
    <a href='#SobreNois'>Mais Sobre</a>
    </Page>
    </>
  )
}

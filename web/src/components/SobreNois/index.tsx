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
            <br />
            <br />
            Hoje a JudasAcademy tem muito mais que um compromisso com você, também lutamos por um mundo mais limpo e sustentável, parte da nossa energia vem de placas solares, trazendo uma redução de até 45% do consumo de energia elétrica. Também somos uma empresa “eco frindly”, onde temos diversas ações para o consumo consciente e práticas mais sustentáveis para o dia a dia.
            </p>
        </div>
      </Container>
      
    <a href='#SobreNois'>Mais Sobre</a>
    </Page>
    </>
  )
}

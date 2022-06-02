import Check from '../../assets/images-clientes/check.svg'
import { Container, Page } from './styles'

export const Solution = () => {
  return (
    <Page id='Serviços'>
      <Container>
        <h1>Solution Provider de TI</h1>
        <span>Somos o seu parceiro de TI para desenvolvimento de <br /> software, plataforma multicloud para microsserviços, <br /> integração e atualização de sistemas legados.</span>
        <div className='container-principal'>
          <div className='container-infos'>
            <img src={Check}  />
            <h2>Software development</h2>
            <p>Desenvolvemos softwares a fim de te ajudar na integração e atualização de sistemas, aumentando resultados, favorecendo a flexibilização de recursos e redução de custos.</p>
          </div>
          <div className='container-infos'>
            <img src={Check} />
            <h2>IT infrastructure</h2>
            <p>Desenvolvemos toda a estrutura de TI do seu negócio, desde o ponto de rede até a configuração e implantação de sistemas e servidores, sejam eles locais ou na nuvem. </p>
          </div>
          <div className='container-infos'>
            <img src={Check} />
            <h2>Outsourcing</h2>
            <p>Com esse serviço, sua empresa alcança mais resultados com menor custo e tem à sua disposição profissionais  que vão somar à sua equipe de trabalho.
</p>
          </div>
        </div>
      </Container>
    </Page>
  )
}

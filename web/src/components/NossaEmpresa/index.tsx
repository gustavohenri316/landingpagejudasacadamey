import Check from '../../assets/images-clientes/check.svg'
import { Container, Page } from './styles'

export const NossaEmpresa = () => {
  return (
    <Page id='SobreNois'>
      <Container>
        <h1 className='text-title'>Nossa Empresa</h1>
        <p className='text-info'>
          Nascemos em 2018, quando vimos oportunidades no mercado de desenvolvimento personalizado, que está em constante crescimento no Brasil. Éramos um grupo de 8 pessoas.
          Em agosto de 2019, era inaugurado nosso primeiro escritório na R. Amauri Souza, 346. Tínhamos cerca de 120 colaboradores e mais de 20 projetos concluídos com perfeição.
          O sucesso foi tão grande que nos anos seguintes (2020 e 2021) a operação se expandiu e agora somos mais de 500 colaboradores espalhados pelo Brasil.
          <br /><br />
          Agora em 2022 estamos atuamos diretamente na área de tecnologia e inovação com assessoria estratégica e o
          desenvolvimento de soluções customizadas para empresas de todos os segmentos.
          <br /> <br />
          Desenvolvemos aplicações, software e outras soluções à medida para impulsionar o seu negócio,
          damos-lhe o apoio e aconselhamento que precisa para tirar a sua ideia do papel e transforma-la em realidade.
        </p>
        <div className='painel'>
          <div className='painel-container'>
            <img src={Check} />
            <h2>Missão</h2>
            <p>Temos a missão de ajudar os nossos clientes a buscar soluções de TI ideais para o seu negócio. Nosso intuito é fazer com que o seu time tenha foco total, maximizando resultados, flexibilizando recursos e reduzindo custos.</p>
          </div>
          <div className='painel-container'>
            <img src={Check} />
            <h2>Visão</h2>
            <p>Ser uma empresa de referência no mercado de soluções de TI. Queremos ser reconhecidos como a melhor opção pela qualidade de nossos serviços e plataformas.</p>
          </div>
          <div className='painel-container'>
            <img src={Check} />
            <h2>Valores</h2>
            <p>
              <li>Ética</li>
              <li>Transparência</li>
              <li>Responsabilidade</li>
              <li>Entrega de resultados</li> </p>
          </div>
        </div>
      </Container>
    </Page>
  )
}

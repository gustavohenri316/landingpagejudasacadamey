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
            <p>Temos a missão de ajudar o mercado corporativo e financeiro na busca de uma solução de TI ideal para o mercado.
              Nosso intuito é fazer com que o seu time tenha foco total em seu negócio, maximizando resultados, flexibilizando recursos e reduzindo custos.</p>
          </div>
          <div className='painel-container'>
            <img src={Check} />
            <h2>Visão</h2>
            <p>Ser uma empresa de referência no mercado de soluções de TI para o mercado corporativo e financeiro. Ser reconhecida como a melhor opção para os cliente pela qualidade de nossos serviços e plataformas.</p>
          </div>
          <div className='painel-container'>
            <img src={Check} />
            <h2>Valores</h2>
            <p>Ética, transparência, responsabilidade e entrega de resultados. Estes são nossos valores básicos e estamos sempre correndo atrás das oportunidades do mercado para que continuemos entregando aquilo que acreditamos.</p>
          </div>
        </div>
      </Container>
    </Page>
  )
}

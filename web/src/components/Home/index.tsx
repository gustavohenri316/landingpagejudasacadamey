import Hero from '../../assets/hero.svg'
import { Container, Page } from './styles'
export const Home = () => {
  return (
    <Page id='Home'>
    <Container>
      <div>
        <h4>BOAS-VINDAS A JUDASACADEMY 👋</h4>
        <h1>Softwares,  Data Analytics  e Big Data</h1>
        <p>Ajudamos você no processo de transformação digital e inovação!</p>
        <button>Converse com um consultor</button>
      </div>
      <img src={Hero} alt="" />
    </Container>
    <div className='info'>
      <div className='info-item'>
        <h1>+220</h1>
        <p>Projetos Concluidos</p>
      </div>
      <div className='info-item'>
        <h1>+25</h1>
        <p>Especialistas disponíveis</p>
      </div>
      <div className='info-item'>
        <h1>+4</h1>
        <p>Anos no mercado</p>
      </div>
    </div>
    </Page>
  )
}

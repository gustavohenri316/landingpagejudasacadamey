import Facebook from '../../assets/images-clientes/facebook.svg'
import Instagram from '../../assets/images-clientes/instagram.svg'
import Youtube from '../../assets/images-clientes/youtube.svg'
import { Container, Page } from './styles'

export const Footer = () => {
  return (
    <Page>
      <Container>
        <div className='infos'>
          <h2>JudasAcademy</h2>
          <p>©2022 - JudasAcademy.</p>
          <p>Todos os direitos reservados.</p>
        </div>
        <div className='midias'>
          <img src={Instagram} />
          <img src={Facebook} />
          <img src={Youtube} />
        </div>
      </Container>
    </Page>
  )
}

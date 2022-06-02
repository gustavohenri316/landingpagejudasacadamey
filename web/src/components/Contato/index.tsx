import mail from '../../assets/images-clientes/mail.svg'
import map from '../../assets/images-clientes/map.svg'
import { Container, Page } from './styles'

export const Contato = () => {
  return (
    <Page>
      <Container>
        <div className='container-infos'>
          <h1>Entre em contato <br /> com a gente!</h1>
          <div className='infos'>
            <img src={mail} />
            <p>R. Amauri Souza, 346</p>
          </div>
          <div className='infos'>
            <img src={map} />
            <p>contato@judasacademy.com</p>
          </div>
        </div>
        <form action="">
          <label>Nome</label>
          <input type="text" />
          <label>Email</label>
          <input type="text" />
          <label>Menssagem</label>
          <textarea></textarea>
          <button>Enviar</button>
        </form>
      </Container>
    </Page>
  )
}

import Hero from '../../assets/images-clientes/hero-contatos.png'
import Mail from '../../assets/images-clientes/mail.svg'
import Map from '../../assets/images-clientes/map.svg'
import { Conatiner, Page } from './styles'

export const CardContatos = () => {
  return (
    <Page >
      <Conatiner>
        <div className='container-principal'>
          <h1>Entre em contato <br /> com a gente!</h1>
          <div className='container-info'>
            <img src={Map}  />
            <p>R. Amauri Souza, 346</p>
          </div>
          <div className='container-info'>
            <img src={Mail}  />
            <p>contato@judasacademy.com</p>
          </div>
          <a>Fale com um consultor</a>
        </div>
        <img src={Hero} className="hero-image" />
      </Conatiner>
    </Page>
  )
}

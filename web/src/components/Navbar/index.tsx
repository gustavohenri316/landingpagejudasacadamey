import { Container } from './styles'

export const Navbar = () => {
  return (
    <Container id='Navbar'>
      <div className='logo'>
        <h1>Judas<span>A</span>cademy</h1>
      </div>
      <div className='nav'>
        <a href="#Home">Inicio</a>
        <a href="#Sobre">Sobre</a>
        <a href="#Serviços">Serviços</a>
        <a href="">Tecnologias</a>
      </div>
        <a className='button'>
          <p>Contato</p>
        </a>
    </Container>
  )
}

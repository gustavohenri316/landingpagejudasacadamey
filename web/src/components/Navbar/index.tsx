import { Link } from 'react-router-dom'
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
        <a href="#Tech">Tecnologias</a>
        <Link to="/Carreiras">Carreira</Link>
      </div>
        <a className='button' href='#Contatos'>
          <p>Contato</p>
        </a>
    </Container>
  )
}

import { Link } from 'react-router-dom'
import { Container } from './styles'
export const NavbarCarreiras = () => {
  return (
    <Container id='Navbar'>
      <div className='logo'>
        <h1>Judas<span>A</span>cademy</h1>
      </div>
      <div className='nav'>
        <Link to="/">Inicio</Link>
        <Link to="/">Sobre</Link>
        <Link to="/">Serviços</Link>
        <Link to="/">Diferenciais</Link>
        <Link to="/">Carreira</Link>
      </div>
        <Link className='contato' to='/'>
          <p>Contato</p>
        </Link>
    </Container>
  )
}

import Amazon from '../../assets/images-clientes/iconmonstr-amazon-3 1.svg'
import Facebook from '../../assets/images-clientes/iconmonstr-facebook-6 1.svg'
import Youtube from '../../assets/images-clientes/iconmonstr-youtube-1 1.svg'
import Kia from '../../assets/images-clientes/kia-motors-1 1.svg'
import Nasa from '../../assets/images-clientes/nasa-6 1.svg'
import Nike from '../../assets/images-clientes/nike-4 1.svg'
import Nubank from '../../assets/images-clientes/nubank-3 1.svg'
import NYSE from '../../assets/images-clientes/nyse-2 1.svg'
import Tesla from '../../assets/images-clientes/tesla-motors-1 1.svg'
import Tiktok from '../../assets/images-clientes/tiktok-logo 1.svg'
import { Container, Page } from './styles'

export const Clientes = () => {
  return (
    <Page id='Clientes'>
      <h1>Nossos Clientes</h1>
      <Container>
        <div>
          <img src={Amazon}  />
          <img src={Facebook}  />
          <img src={Youtube}  />
          <img src={Nasa}  />
          <img src={Kia}  />
        </div>
        <div>
          <img src={Nike}  />
          <img src={Nubank}  />
          <img src={NYSE}  />
          <img src={Tesla}  />
          <img src={Tiktok}  />
        </div>
        
      </Container>
    </Page>
  )
}

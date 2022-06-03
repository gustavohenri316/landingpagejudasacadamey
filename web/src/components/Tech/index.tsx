import angula from '../../assets/images-clientes/angular.svg'
import aws from '../../assets/images-clientes/aws.svg'
import azure from '../../assets/images-clientes/azure.svg'
import docker from '../../assets/images-clientes/docker.svg'
import java from '../../assets/images-clientes/java.svg'
import kubernets from '../../assets/images-clientes/kubernets.svg'
import net from '../../assets/images-clientes/net.svg'
import react from '../../assets/images-clientes/react.svg'
import { Container, Page } from './styles'

export const Tech = () => {
  return (
    <Page id='Tech'>
      <h1>Nossos Diferenciais</h1>
      <span>Principais Tecnologias <br /><br />
        Confira algumas das principais tecnologias que <br />
        trabalhamos para entregar soluções digitais escaláveis.
      </span>
      <Container>
        <div className='container-principal'>
          <div className='container-secundario'>
            <img src={angula}  />
            <h2>AngularJs</h2>
            <p>Framework open source de desenvolvimento front-end que possibilitará desenvolvimento de aplicações web.</p>
          </div>
          <div className='container-secundario'>
            <img src={react}  />
            <h2>React</h2>
            <p>Conte com uma biblioteca JavaScript de código aberto e crie interfaces únicas de usuário em web.</p>
          </div>
          <div className='container-secundario'>
            <img src={net}  />
            <h2>.NET</h2>
            <p>Conte com a expertise da Microsoft em uma plataforma única para desenvolvimento e execução de sistemas e aplicações.</p>
          </div>
        </div >
        <div className='container-principal'>
          <div className='container-secundario'>
            <img src={docker}  />
            <h2>Docker</h2>
            <p>Tenha uma plataforma open source que facilitará a criação e administração de ambientes isolados, tudo na nuvem a dois cliques de você.</p>
          </div>
          <div className='container-secundario'>
            <img src={kubernets}  />
            <h2>Kubernetes</h2>
            <p>Automatize a implantação, dimensionamento e a gestão de aplicações com um sistema de orquestração de contêineres open source.</p>
          </div>
          <div className='container-secundario'>
            <img src={aws}  />
            <h2>AWS</h2>
            <p>Também conhecido como Amazon Web Services, é uma plataforma de serviços de computação em nuvem.</p>
          </div>
        </div>
        <div className='container-principal'>
          <div className='container-secundario'>
            <img src={java}  />
            <h2>Java 8+</h2>
            <p>Usufrua do Java 8+ para desenvolver aplicações que irão tornar a Web mais divertida e útil, use a Web em força máxima.</p>
          </div>
          <div className='container-secundario'>
            <img src={azure}  />
            <h2>Azure</h2>
            <p>Use o Microsoft Azure para executar aplicativos e serviços de acordo com os conceitos da computação em nuvem.</p>
          </div>
        </div>
      </Container>
    </Page>
  )
}

import { Footer } from '../Footer'
import { NavbarCarreiras } from '../NavbarCarreira'
import { Page } from './styles'
export const Carreiras = () => {
  return (
    <>
      <NavbarCarreiras />
      <Page>
        <div className='principal'>
          <h1>Carreiras</h1>
        </div>
        <div className='filtro'>
          <div className='input'>
            <input type="text" placeholder='Buscar vagas'/>
            <input type="text" placeholder='Tipos de vagas' />
          </div>
          <button className='button'>Pesquisar Vagas</button>
        </div>
        <section className='Vagas'>
          <div className='vagas-container'>
            <div className='vagas-info'>
              <h4>.NET CORE</h4>
              <span>JudasAcademy Transformando ideais em Inovaçao</span>
            </div>
            <div className='vagas-text'>
              <span>Remoto</span>
            </div>
            <div className='vagas-text'>
              <p className='vagas-tipe'>Desenvolvedor</p>
            </div>
          </div>
          {/* ------------------- */}
          <div className='vagas-container'>
            <div className='vagas-info'>
              <h4>.NET CORE</h4>
              <span>JudasAcademy Transformando ideais em Inovaçao</span>
            </div>
            <div className='vagas-text'>
              <span>Remoto</span>
            </div>
            <div className='vagas-text'>
              <p className='vagas-tipe'>Analista</p>
            </div>
          </div>
          {/* ------------------- */}
          <div className='vagas-container'>
            <div className='vagas-info'>
              <h4>DEVOPS</h4>
              <span>JudasAcademy Transformando ideais em Inovaçao</span>
            </div>
            <div className='vagas-text'>
              <span>Remoto</span>
            </div>
            <div className='vagas-text'>
              <p className='vagas-tipe'>Desenvolvedor</p>
            </div>
          </div>
          {/* ------------------- */}
          <div className='vagas-container'>
            <div className='vagas-info'>
              <h4>Arquiteto de Soluçoes</h4>
              <span>JudasAcademy Transformando ideais em Inovaçao</span>
            </div>
            <div className='vagas-text'>
              <span>Remoto</span>
            </div>
            <div className='vagas-text'>
              <p className='vagas-tipe'>Analista</p>
            </div>
          </div>
          {/* ------------------- */}
          <div className='vagas-container'>
            <div className='vagas-info'>
              <h4>Desenvolvedor Front End</h4>
              <span>JudasAcademy Transformando ideais em Inovaçao</span>
            </div>
            <div className='vagas-text'>
              <span>Remoto</span>
            </div>
            <div className='vagas-text'>
              <p className='vagas-tipe'>Desenvolvedor</p>
            </div>
          </div>
          {/* ------------------- */}
          <div className='vagas-container'>
            <div className='vagas-info'>
              <h4>Analista de Qualidade</h4>
              <span>JudasAcademy Transformando ideais em Inovaçao</span>
            </div>
            <div className='vagas-text'>
              <span>Remoto</span>
            </div>
            <div className='vagas-text'>
              <p className='vagas-tipe'>Desenvolvedor</p>
            </div>
          </div>
          {/* ------------------- */}
          <div className='vagas-container'>
            <div className='vagas-info'>
              <h4>Analista de Infraestrutura</h4>
              <span>JudasAcademy Transformando ideais em Inovaçao</span>
            </div>
            <div className='vagas-text'>
              <span>Betim</span>
            </div>
            <div className='vagas-text'>
              <p className='vagas-tipe'>Analista</p>
            </div>
          </div>
          {/* ------------------- */}
          <div className='vagas-container'>
            <div className='vagas-info'>
              <h4>Desenvolvedor Back End Java</h4>
              <span>JudasAcademy Transformando ideais em Inovaçao</span>
            </div>
            <div className='vagas-text'>
              <span>Remoto</span>
            </div>
            <div className='vagas-text'>
              <p className='vagas-tipe'>Desenvolvedor</p>
            </div>
          </div>
         
        </section>
      </Page>
      <Footer />
    </>
  )
}

import Hero from "../../assets/hero1.svg";
import { Container, Page } from "./styles";
export const Home = () => {
  return (
    <Page id="Home">
      <Container>
        <div>
          <h4>BOAS-VINDAS A JUDASACADEMY 👋</h4>
          <h1>Softwares, Data Analytics e Big Data</h1>
          <p>Ajudamos você no processo de transformação digital e inovação!</p>
          <a href="#Contatos">Converse com um consultor</a>
        </div>
        <section>
          <img src={Hero} alt="" />
        </section>
      </Container>
      <div className="info">
        <div className="info-item">
          <h1>+220</h1>
          <p>Projetos Concluidos</p>
        </div>
        <div className="info-item">
          <h1>+25</h1>
          <p>Especialistas disponíveis</p>
        </div>
        <div className="info-item">
          <h1>+4</h1>
          <p>Anos no mercado</p>
        </div>
      </div>
    </Page>
  );
};

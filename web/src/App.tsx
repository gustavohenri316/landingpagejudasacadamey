import { CardContatos } from "./components/CardContato";
import { Clientes } from "./components/Clientes";
import { Contato } from "./components/Contato";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { NossaEmpresa } from "./components/NossaEmpresa";
import { Ready } from "./components/Ready";
import { SobreNois } from "./components/SobreNois";
import { Solution } from "./components/Solution";
import { Tech } from "./components/Tech";
import { Widget } from "./components/Widget";

export function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Clientes />
      <div style={{ position: 'fixed', bottom:'10px', right:'10px'}}>
        <Widget />
      </div>
      <SobreNois />
      <NossaEmpresa />
      <CardContatos />
      <Solution />
      <Tech />
      <Ready />
      <Contato />
    </>
  )
}
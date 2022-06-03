import { CardContatos } from "./components/CardContato";
import { Clientes } from "./components/Clientes";
import { Contato } from "./components/Contato";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { NossaEmpresa } from "./components/NossaEmpresa";
import { Ready } from "./components/Ready";
import { SobreNois } from "./components/SobreNois";
import { Solution } from "./components/Solution";
import { Tech } from "./components/Tech";
export function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Clientes />
      <SobreNois />
      <NossaEmpresa />
      <CardContatos />
      <Solution />
      <Tech />
      <Ready />
      <Contato />
      <Footer/>
  
    </>
  )
}
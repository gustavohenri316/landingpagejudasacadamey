import { CardContatos } from "./components/CardContato";
import { Clientes } from "./components/Clientes";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { NossaEmpresa } from "./components/NossaEmpresa";
import { SobreNois } from "./components/SobreNois";
import { Widget } from "./components/Widget";

export function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Clientes/>
      <div style={{ position: 'fixed', bottom:'10px', right:'10px'}}>
        <Widget />
      </div>
      <SobreNois/>
      <NossaEmpresa/>
      <CardContatos/>
    </>
  )
}
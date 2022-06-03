import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { Carreiras } from './components/Carreira';
import { Widget } from './components/Widget';

export const Rotas = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<App/>}/>
        <Route path='/Carreiras' element={<Carreiras />}/>
      </Routes>
      <div style={{ position: 'fixed', bottom:'10px', right:'10px'}}>
        <Widget />
      </div>
    </BrowserRouter>

  )
}
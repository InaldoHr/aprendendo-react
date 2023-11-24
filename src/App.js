
import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import QuemSomos from './components/pages/QuemSomos';

import { FaUser, FaHome, FaHeadphonesAlt } from "react-icons/fa";

import Calculadora from './components/Calculadora';






function App() {

  return (
    <div>

      <h1>Menu</h1>
      <BrowserRouter>
        <ul>
          <li><Link to="/"><FaHome />

            Home</Link></li>
          <li><Link to="/contato"><FaUser />
            Contatos</Link></li>
          <li><Link to="/quemsomos"><FaHeadphonesAlt />

            Quem somos</Link></li>
          <li><Link to="/calculadora">Calculadora</Link></li>
        </ul>


        {/* aqui aparecerá o componente da rota  */}

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/quemsomos" element={<QuemSomos />} />
          <Route path="/calculadora" element={<Calculadora />} />
        </Routes>
      </BrowserRouter>




      {/* Fim do componente da rota */}
    </div>
  );
}

export default App;

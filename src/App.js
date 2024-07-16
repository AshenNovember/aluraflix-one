import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';

import HomePage from "./components/home-page";
import NewVideo from "./components/new-video";

import Navigator from "./components/navigator";
import Footer from "./components/footer";

function App() {
  const [colaboradores, setColaboradores] = useState(() => {
    const savedColaboradores = localStorage.getItem('colaboradores');
    return savedColaboradores ? JSON.parse(savedColaboradores) : [];
  });

  const aoColaboradorCadastrado = (colaborador) => {
    const novosColaboradores = [...colaboradores, colaborador];
    setColaboradores(novosColaboradores);
    localStorage.setItem('colaboradores', JSON.stringify(novosColaboradores));
    console.log("Novo colaborador adicionado:", colaborador);
    console.log("Lista de colaboradores atualizada:", novosColaboradores);
  };

  const excluirColaborador = (id) => {
    const novaLista = colaboradores.filter(colaborador => colaborador.id !== id);
    setColaboradores(novaLista);
    localStorage.setItem('colaboradores', JSON.stringify(novaLista));
    console.log("Colaborador excluído. Lista de colaboradores atualizada:", novaLista);
  };

  const atualizarColaborador = (colaboradorAtualizado) => {
    const novaLista = colaboradores.map(colaborador =>
      colaborador.id === colaboradorAtualizado.id ? colaboradorAtualizado : colaborador
    );
    setColaboradores(novaLista);
    localStorage.setItem('colaboradores', JSON.stringify(novaLista));
    console.log("Colaborador atualizado:", colaboradorAtualizado);
    console.log("Lista de colaboradores atualizada:", novaLista);
  };

  useEffect(() => {
    localStorage.setItem('colaboradores', JSON.stringify(colaboradores));
  }, [colaboradores]);

  return (
    <BrowserRouter>
      <Navigator />
      <Routes>
        <Route path="/" element={<HomePage colaboradores={colaboradores} excluirColaborador={excluirColaborador} atualizarColaborador={atualizarColaborador} />} />
        <Route path="/new-video" element={<NewVideo aoColaboradorCadastrado={aoColaboradorCadastrado} />} />
        <Route path="*" element={<div>Error 404: Página não encontrada.</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import React, { useState } from 'react';
import { isTablet, isMobile } from 'react-device-detect';
import './home-page.css'
import Carousel from "../carousel";
import Team from "../team";
import EditModal from '../modal/EditModal';

function HomePage({ colaboradores, excluirColaborador, atualizarColaborador }) {
  const times = [
    {
      nome: 'Front End',
      corPrimaria: '#6BD1FF',
    },
    {
      nome: 'Back End',
      corPrimaria: '#00C86F',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
    }
  ];

  const timesComColaboradores = times.filter(time =>
    colaboradores.some(colaborador => colaborador.time === time.nome)
  );

  const [modalAberta, setModalAberta] = useState(false);
  const [colaboradorEditando, setColaboradorEditando] = useState(null);

  const handleEditarColaborador = (colaborador) => {
    setColaboradorEditando(colaborador);
    setModalAberta(true);
    console.log("Editando colaborador:", colaborador);
  };

  const handleSalvarColaborador = (dadosAtualizados) => {
    const colaboradorAtualizado = { ...colaboradorEditando, ...dadosAtualizados };
    atualizarColaborador(colaboradorAtualizado);
    setModalAberta(false);
    console.log("Colaborador salvo:", colaboradorAtualizado);
  };

  return (
    <div className="App">
      <div className='hide-on-mobile-tablet'>
        <Carousel />
      </div>
      {timesComColaboradores.map(time => (
        <Team 
          key={time.nome}
          time={time.nome} 
          corPrimaria={time.corPrimaria} 
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={excluirColaborador}
          aoEditar={handleEditarColaborador}
        />
      ))}

      {modalAberta && colaboradorEditando && (
        <EditModal
          isOpen={modalAberta}
          onClose={() => setModalAberta(false)}
          colaborador={colaboradorEditando}
          aoSalvar={handleSalvarColaborador}
        />
      )}
    </div>
  );
}

export default HomePage;

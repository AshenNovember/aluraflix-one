import React from 'react';
import './team.css';
import { RiDeleteBin2Line } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";

const Team = ({ time, corPrimaria, colaboradores, aoDeletar, aoEditar }) => {
  const tag = {
    backgroundColor: corPrimaria,
    borderColor: corPrimaria,
  };
  const cardStyle = {
    boxShadow: `1px 1px 10px 3px ${corPrimaria}`,
    borderColor: `${corPrimaria}`,
    backgroundColor: `${corPrimaria}`
  };
  const opt = {
    borderColor: `${corPrimaria}`,
  };
  return (
    <section className='time'>
      <h2 style={tag}>{time}</h2>
      <div className="colaboradores">
        {colaboradores.map(colaborador => (
          <div key={colaborador.id} className="colaborador" style={cardStyle}>
            <div className="cabecalho">
              <a href={colaborador.video} target="_blank" rel="noopener noreferrer">
                <img style={opt} src={colaborador.imagem} name={colaborador.titulo} alt={colaborador.descricao} />
              </a>
            </div>
            <div className='opcoes'>
              <div onClick={() => aoDeletar(colaborador.id)}><span><RiDeleteBin2Line size={30} />Excluir</span></div>
              <div onClick={() => aoEditar(colaborador)}><span><AiFillEdit size={30}/>Editar</span></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;

import React, { useState, useEffect } from 'react';
import { CgCloseO } from "react-icons/cg";
import Button from '../button'
import './edit-modal.css';

const EditModal = ({ isOpen, onClose, colaborador, aoSalvar }) => {
  const [titulo, setTitulo] = useState('');
  const [imagem, setImagem] = useState('');
  const [video, setVideo] = useState('');
  const [descricao, setDescricao] = useState('');

  useEffect(() => {
    if (colaborador) {
      setTitulo(colaborador.titulo);
      setImagem(colaborador.imagem);
      setVideo(colaborador.video);
      setDescricao(colaborador.descricao);
    }
  }, [colaborador]);

  const handleSalvar = () => {
    const dadosAtualizados = {
      titulo,
      imagem,
      video,
      descricao
    };
    aoSalvar(dadosAtualizados);
    console.log("Salvando dados atualizados:", dadosAtualizados);
  };

  const handleLimpar = () => {
    setTitulo('');
    setImagem('');
    setVideo('');
    setDescricao('');
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className='cya'>
          <h2>Editar Card:</h2>
          <span className="close" onClick={onClose}><CgCloseO size={45} color='white'/></span>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); handleSalvar(); }}>
          <label>Título:</label>
          <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
          <label>Imagem:</label>
          <input type="text" value={imagem} onChange={(e) => setImagem(e.target.value)} />
          <label>Vídeo:</label>
          <input type="text" value={video} onChange={(e) => setVideo(e.target.value)} />
          <label>Descrição:</label>
          <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} />
          <div className='x_botoes'>
            <Button type="submit">Salvar</Button>
            <Button type="button" onClick={handleLimpar}>Limpar</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;

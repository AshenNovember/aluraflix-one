import DataList from "../data_list";
import { useState } from "react";
import Input from "../input";
import Button from "../button";
import TextArea from "../textarea";
import './new-video.css';

function NewVideo({ aoColaboradorCadastrado }) {
  const times = ['Front End', 'Back End', 'Mobile'];

  const [titulo, setTitulo] = useState('');
  const [time, setTime] = useState('');
  const [imagem, setImagem] = useState('');
  const [video, setVideo] = useState('');
  const [descricao, setDescricao] = useState('');

  const [isTituloValid, setIsTituloValid] = useState(true);
  const [isTimeValid, setIsTimeValid] = useState(true);
  const [isImagemValid, setIsImagemValid] = useState(true);
  const [isVideoValid, setIsVideoValid] = useState(true);
  const [isDescricaoValid, setIsDescricaoValid] = useState(true);

  const onSubmit = (evento) => {
    evento.preventDefault();
    const isTituloValid = titulo.trim() !== '';
    const isTimeValid = time.trim() !== '';
    const isImagemValid = imagem.trim() !== '';
    const isVideoValid = video.trim() !== '';
    const isDescricaoValid = descricao.trim() !== '';

    setIsTituloValid(isTituloValid);
    setIsTimeValid(isTimeValid);
    setIsImagemValid(isImagemValid);
    setIsVideoValid(isVideoValid);
    setIsDescricaoValid(isDescricaoValid);

    if (isTituloValid && isTimeValid && isImagemValid && isVideoValid && isDescricaoValid) {
      const novoColaborador = {
        id: new Date().getTime(), // Usar timestamp como ID único
        titulo: titulo,
        time: time,
        imagem: imagem,
        video: video,
        descricao: descricao
      };
      aoColaboradorCadastrado(novoColaborador);
      clearInput();
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  };

  const clearInput = () => {
    setTitulo('');
    setTime('');
    setImagem('');
    setVideo('');
    setDescricao('');

    setIsTituloValid(true);
    setIsTimeValid(true);
    setIsImagemValid(true);
    setIsVideoValid(true);
    setIsDescricaoValid(true);
  };

  return (
    <section className="form">
      <h1>Novo Vídeo</h1>
      <h2>Complete o formulário para criar um novo card de vídeo.</h2>
      <h3>Criar Card</h3>
      <form onSubmit={onSubmit}>
        <Input 
          label="Título"
          placeholder="Digite o título."
          value={titulo}
          aoAlterado={value => {
            setTitulo(value);
            setIsTituloValid(value.trim() !== '');
          }}
          isValid={isTituloValid}
          className={`campo-texto ${!isTituloValid ? 'invalido' : ''}`}
        />
        <DataList 
          label="Categoria"
          items={times}
          placeholder="Selecione uma categoria."
          value={time}
          aoAlterado={value => {
            setTime(value);
            setIsTimeValid(value.trim() !== '');
          }}
          isValid={isTimeValid}
          className={`campo-texto ${!isTimeValid ? 'invalido' : ''}`}
        />
        <Input 
          label="Imagem"
          placeholder="Digite o link da imagem."
          value={imagem}
          aoAlterado={value => {
            setImagem(value);
            setIsImagemValid(value.trim() !== '');
          }}
          isValid={isImagemValid}
          className={`campo-texto ${!isImagemValid ? 'invalido' : ''}`}
        />
        <Input 
          label="Vídeo" 
          placeholder="Digite o link do vídeo."
          value={video}
          aoAlterado={value => {
            setVideo(value);
            setIsVideoValid(value.trim() !== '');
          }}
          isValid={isVideoValid}
          className={`campo-texto ${!isVideoValid ? 'invalido' : ''}`}
        />
        <TextArea
          label="Descrição"
          placeholder="Sobre o que é esse vídeo?"
          value={descricao}
          aoAlterado={value => {
            setDescricao(value);
            setIsDescricaoValid(value.trim() !== '');
          }}
          isValid={isDescricaoValid}
          className={`campo-texto ${!isDescricaoValid ? 'invalido' : ''}`}
        />
        <div className="m_botoes">
          <Button type='submit'>Salvar</Button>
          <Button onClick={clearInput} type='button'>Limpar</Button>
        </div>
      </form>
    </section>
  );
}

export default NewVideo;

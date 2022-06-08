import { useState } from "react";

export function MissingAnimalForm() {
  const [data, setData] = useState({});

  return (
    <div className="form rounded flex flex-col">
      <h2>Registrar animal desaparecido</h2>
      <form>
        <div className="form-field">
          <span>Qual a espécie?</span>
          <div className="radio-group">
            <input
              type="radio"
              name="specie"
              id="cat"
              value="cat"
              alt="Emoji de um gato"
            />
            🐱
            <input
              type="radio"
              name="specie"
              id="dog"
              value="dog"
              alt="Emoji de um Cachorro"
            />
            🐶
            <input
              type="radio"
              name="specie"
              id="bird"
              value="bird"
              alt="Emoji de um Pássaro"
            />
            🐦
            <input
              type="radio"
              name="specie"
              id="other"
              value="other"
              alt="Emoji de uma interrogação"
            />
            ❓
          </div>
        </div>
        <div className="form-field">
          <span>Nome (apelido) do animal:</span>
          <input className="input" type="text" name="name" id="name" />
        </div>
        <div className="form-field">
          <span>Descrição:</span>
          <textarea
            className="input"
            name="description"
            id="description"
            placeholder="digite uma descrição em até 250 caracteres"
            rows={5}
            maxLength={250}
          ></textarea>
        </div>
        <div className="form-field">
          <span>Sexo:</span>
          <input type="radio" name="sex" value="male" /> M
          <input type="radio" name="sex" value="female" /> F
        </div>
        <div className="form-field">
          <span>Anexe uma foto do desaparecido:</span>
          <input type="file" name="picture" id="picture" />
        </div>

        <div className="form-field">
          <span>Última localização:</span>
          <div style={{ height: "10rem", background: "green" }}></div>
        </div>

        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  );
}

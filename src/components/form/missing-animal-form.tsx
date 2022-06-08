import { useState } from "react";

export function MissingAnimalForm() {
  const [data, setData] = useState({});

  return (
    <div className="form rounded flex flex-col">
      <h2>Registrar animal desaparecido</h2>
      <form>
        <div>
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
        <div>
          <input
            className="input"
            type="text"
            name="name"
            id="name"
            placeholder="Nome (apelido) do animal"
          />
        </div>
        <div>
          <textarea
            className="input"
            name="description"
            id="description"
            placeholder="Descrição (em até 100 letras)"
          ></textarea>
        </div>
        <div>
          <span>Anexe uma foto do desaparecido</span>
          <input type="file" name="picture" id="picture" />
        </div>
      </form>
    </div>
  );
}

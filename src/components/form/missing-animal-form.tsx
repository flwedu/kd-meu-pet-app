import { FormEvent, useState } from "react";
import { CoordinatesPicker } from "../coordinates-picker";
import { PickerGroup } from "../shared/picker-group";

export function MissingAnimalForm() {
  const [data, setData] = useState({});

  const specieOptions = [
    { id: "cat", text: "🐱 Gato", alt: "Gato" },
    { id: "dog", text: "🐶 Cachorro", alt: "Cachorro" },
    { id: "other", text: "❓ Outros", alt: "Outros" },
  ];

  function handleInputChange(e: any) {
    const { name, value } = e.currentTarget;

    setData({ ...data, [name]: value });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(data);
  }

  return (
    <div className="form rounded flex flex-col">
      <h2>Registrar animal desaparecido</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <PickerGroup
            disabled={false}
            spanText="Qual a espécie?"
            name="specie"
            options={specieOptions}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-field">
          <span>Nome (apelido) do animal:</span>
          <input
            className="input"
            type="text"
            name="name"
            id="name"
            onChange={handleInputChange}
          />
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
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="form-field">
          <PickerGroup
            disabled={false}
            name="sex"
            spanText="Sexo?"
            options={[
              { id: "male", text: "M", alt: "Macho" },
              { id: "female", text: "F", alt: "Fêmea" },
            ]}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-field">
          <span>Anexe uma foto do desaparecido:</span>
          <input type="file" name="picture" id="picture" />
        </div>

        <div className="form-field">
          <span>Última localização:</span>
          <CoordinatesPicker onChange={handleInputChange} />
        </div>

        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  );
}

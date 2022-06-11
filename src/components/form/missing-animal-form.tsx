import { useState } from "react";
import { ColorPicker } from "../form-components/color-picker";
import { GoogleCoordinatesPicker } from "../form-components/google-coordinates-picker";
import { PickerGroup } from "../form-components/picker-group";
import { RequiredTextField } from "../form-components/required-text-field";

export type MissingAnimalData = {
  name: string;
  color: string[];
  location: {
    lat: number;
    lng: number;
  };
  description: string;
  specie: string;
  sex: "male" | "female";
  picture: string;
};

export function MissingAnimalForm() {
  const [data, setData] = useState({});

  const specieOptions = [
    { id: "cat", text: "🐱 Gato", alt: "Gato" },
    { id: "dog", text: "🐶 Cachorro", alt: "Cachorro" },
    { id: "other", text: "❓ Outros", alt: "Outros" },
  ];

  function handleChange(e: any) {
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
        <PickerGroup
          disabled={false}
          spanText="Qual a espécie?"
          name="specie"
          options={specieOptions}
          onChange={handleChange}
        />

        <RequiredTextField
          name="name"
          spanText="Nome (apelido) do animal"
          placeholder=""
          type="text"
          onChange={handleChange}
          bordered={true}
        />
        <div className="form-field">
          <span>Descrição:</span>
          <textarea
            className="input"
            name="description"
            id="description"
            placeholder="digite uma descrição em até 250 caracteres"
            rows={5}
            maxLength={250}
            onChange={handleChange}
          ></textarea>
        </div>
        <ColorPicker />

        <PickerGroup
          disabled={false}
          name="sex"
          spanText="Sexo?"
          options={[
            { id: "male", text: "M", alt: "Macho" },
            { id: "female", text: "F", alt: "Fêmea" },
          ]}
          onChange={handleChange}
        />
        <div className="form-field">
          <span>Anexe uma foto do desaparecido:</span>
          <input type="file" name="picture" id="picture" />
        </div>

        <GoogleCoordinatesPicker
          spanText="Última localização:"
          onChange={handleChange}
        />

        <input className="button" type="submit" value="Cadastrar" />
      </form>
    </div>
  );
}

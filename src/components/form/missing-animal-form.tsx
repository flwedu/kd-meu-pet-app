import { ChangeEvent, FormEvent, useState } from "react";
import { Animal } from "../../model";
import { ColorPicker } from "../form-components/color-picker";
import { GoogleCoordinatesPicker } from "../form-components/google-coordinates-picker";
import { PickerGroup } from "../form-components/picker-group";
import { RequiredTextField } from "../form-components/required-text-field";

export function MissingAnimalForm() {
  const [data, setData] = useState<Animal>({
    name: "",
    color: [],
    description: "",
    location: { lat: 0, lng: 0 },
    picture: "",
    sex: "male",
    specie: "cat",
  });

  const specieOptions = [
    { id: "cat", text: "🐱 Gato", alt: "Gato" },
    { id: "dog", text: "🐶 Cachorro", alt: "Cachorro" },
    { id: "other", text: "❓ Outros", alt: "Outros" },
  ];

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.currentTarget;
    return setData({ ...data, [name]: value });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(data);
  }

  return (
    <div className="form rounded flex flex-col">
      <h2>Registrar animal desaparecido</h2>

      <form onSubmit={handleSubmit}>
        <PickerGroup
          disabled={false}
          value={data.specie}
          descriptionText="Qual a espécie?"
          name="specie"
          options={specieOptions}
          onChange={handleChange}
        />

        <RequiredTextField
          name="name"
          value={data.name}
          descriptionText="Nome (apelido) do animal"
          placeholder=""
          type="text"
          onChange={handleChange}
          bordered={true}
        />
        <div className="form-field">
          <p>Descrição:</p>
          <textarea
            name="description"
            value={data.description}
            className="input"
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
          value={data.sex}
          descriptionText="Sexo?"
          options={[
            { id: "male", text: "M", alt: "Macho" },
            { id: "female", text: "F", alt: "Fêmea" },
          ]}
          onChange={handleChange}
        />
        <div className="form-field">
          <p>Anexe uma foto do desaparecido:</p>
          <input type="file" name="picture" id="picture" />
        </div>

        <GoogleCoordinatesPicker
          descriptionText="Última localização:"
          onChange={handleChange}
        />

        <input className="button" type="submit" value="Cadastrar" />
      </form>
    </div>
  );
}

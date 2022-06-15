import { useState } from "react";

type Color = {
  name: string;
  bgColor: string;
  fontColor: string;
};

const DefaultAcceptedColors: Color[] = [
  { name: "Preto", bgColor: "black", fontColor: "white" },
  { name: "Branco", bgColor: "white", fontColor: "black" },
  { name: "Amarelo", bgColor: "yellow", fontColor: "black" },
  { name: "Marrom", bgColor: "brown", fontColor: "black" },
  { name: "Caramelo", bgColor: "orange", fontColor: "black" },
  { name: "Cinza", bgColor: "grey", fontColor: "black" },
];

export function ColorPicker() {
  const [colors, setColors] = useState<Color[]>(DefaultAcceptedColors);
  const [selectedColors, setSelectedColors] = useState<Color[]>([]);

  function handleClick(e: any) {
    e.preventDefault();
    setSelectedColors([...selectedColors, e.target.value]);
  }

  function renderColorButton(color: Color, index: number) {
    return (
      <input
        key={color.name}
        className="button"
        type="button"
        onClick={handleClick}
        value={color.name}
        style={{
          color: color.fontColor,
          background: color.bgColor,
          width: "6rem",
        }}
      />
    );
  }

  return (
    <div className="form-field">
      <p>Cores:</p>
      {colors.map(renderColorButton)}
    </div>
  );
}

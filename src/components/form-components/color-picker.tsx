import { useState } from "react";

export function ColorPicker() {
  const [colors, setColors] = useState<string[]>([]);
  const [text, setText] = useState<string>("");

  function handleTextChange(e: any) {
    setText(e.currentTarget.value);
  }

  function handleKeyPress(e: any) {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }

  function handleSubmit() {
    setColors([...colors, text]);
    setText("");
  }

  function renderColor(value: string, index: number) {
    return <li key={index}>{value}</li>;
  }

  return (
    <div className="form-field">
      <span>Cores:</span>
      <ul>{colors.map(renderColor)}</ul>
      <input
        type="text"
        name="color"
        value={text}
        onChange={handleTextChange}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
}

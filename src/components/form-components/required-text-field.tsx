import { ChangeEvent } from "react";

type Props = {
  name: string;
  type: string;
  placeholder: string;
  value?: string;
  descriptionText?: string;
  bordered?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function RequiredTextField({
  name,
  value,
  type,
  placeholder,
  descriptionText,
  bordered,
  onChange,
}: Props) {
  return (
    <div className={bordered ? "form-field" : "field"}>
      {descriptionText && <p>{descriptionText}</p>}
      <input
        className="input"
        type={type}
        name={name}
        value={value || ""}
        placeholder={placeholder}
        required
        onChange={onChange}
      />
    </div>
  );
}

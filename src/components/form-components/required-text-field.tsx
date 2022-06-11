type Props = {
  name: string;
  value: string;
  type: string;
  placeholder: string;
  spanText?: string;
  bordered?: boolean;
  onChange: (e: any) => void;
};

export function RequiredTextField({
  name,
  value,
  type,
  placeholder,
  spanText,
  bordered,
  onChange,
}: Props) {
  return (
    <div className={bordered ? "form-field" : "field"}>
      {spanText && <span>{spanText}</span>}
      <input
        className="input"
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        required
        onChange={onChange}
      />
    </div>
  );
}

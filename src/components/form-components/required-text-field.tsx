type Props = {
  name: string;
  type: string;
  placeholder: string;
  spanText?: string;
  bordered?: boolean;
  onChange: (e: any) => void;
};

export function RequiredTextField({
  name,
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
        placeholder={placeholder}
        required
        onChange={onChange}
      />
    </div>
  );
}

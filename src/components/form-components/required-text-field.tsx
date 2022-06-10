type Props = {
  name: string;
  type: string;
  placeholder: string;
  onChange: (e: any) => void;
};

export function RequiredTextField({
  name,
  type,
  placeholder,
  onChange,
}: Props) {
  return (
    <div className="field">
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

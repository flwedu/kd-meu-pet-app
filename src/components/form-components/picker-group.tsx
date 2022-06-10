export type PickerOption = {
  id: string;
  alt: string;
  text: string;
};

type PickerProps = {
  spanText: string;
  name: string;
  disabled: boolean;
  options: PickerOption[];
  onChange: (event: any) => void;
};

export function PickerGroup(props: PickerProps) {
  function renderOption(item: PickerOption) {
    return (
      <div key={item.id}>
        <input
          disabled={props.disabled}
          type="radio"
          name={props.name}
          id={item.id}
          value={item.id}
          alt={item.alt}
          onChange={props.onChange}
          required
        />{" "}
        {item.text}
      </div>
    );
  }

  return (
    <div className="form-field">
      <span>{props.spanText}</span>
      <div className="radio-group flex flex-col">
        {props.options.map(renderOption)}
      </div>
    </div>
  );
}

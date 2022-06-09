type PickerOption = {
  id: string;
  alt: string;
  text: string;
};

type PickerProps = {
  spanText: string;
  name: string;
  disabled: boolean;
  options: PickerOption[];
};

export function PickerGroup(props: PickerProps) {
  function renderOption(option: PickerOption) {
    return (
      <>
        <input
          disabled={props.disabled}
          type="radio"
          name={props.name}
          id={option.id}
          value={option.id}
          alt={option.alt}
        />{" "}
        {option.text}
      </>
    );
  }

  return (
    <>
      <span>{props.spanText}</span>
      <div className="radio-group">{props.options.map(renderOption)}</div>
    </>
  );
}

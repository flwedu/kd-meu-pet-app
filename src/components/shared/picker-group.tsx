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
  function renderOption(item: PickerOption, index: number) {
    return (
      <>
        <input
          disabled={props.disabled}
          key={index}
          type="radio"
          name={props.name}
          id={item.id}
          value={item.id}
          alt={item.alt}
        />{" "}
        {item.text}
      </>
    );
  }

  return (
    <>
      <span>{props.spanText}</span>
      <div key={props.name} className="radio-group">
        {props.options.map(renderOption)}
      </div>
    </>
  );
}

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
      <div>
        <input
          key={index}
          disabled={props.disabled}
          type="radio"
          name={props.name}
          id={item.id}
          value={item.id}
          alt={item.alt}
        />{" "}
        {item.text}
      </div>
    );
  }

  return (
    <>
      <span>{props.spanText}</span>
      <div key={props.name} className="radio-group flex flex-col">
        {props.options.map(renderOption)}
      </div>
    </>
  );
}

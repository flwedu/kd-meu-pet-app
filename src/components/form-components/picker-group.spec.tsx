import { render, fireEvent } from "@testing-library/react";
import { PickerGroup, PickerOption } from "./picker-group";

describe("PickerGroup component tests", () => {
  const props = {
    name: "Tests",
    spanText: "Testing Text",
    options: [],
    onChange: jest.fn(),
    disabled: false,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe("should render the component properly", () => {
    test("With zero children", () => {
      const { container } = render(<PickerGroup {...props} />);
      expect(container).toMatchSnapshot();
    });

    test("With one children", () => {
      const options: PickerOption[] = [
        {
          id: "first",
          alt: "first alt",
          text: "First text",
        },
      ];
      const { container } = render(
        <PickerGroup {...props} options={options} />
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe("Behavior tests", () => {
    test("Should trigger the onChange event", () => {
      const options: PickerOption[] = [
        {
          id: "first",
          alt: "first alt",
          text: "First text",
        },
      ];
      const { container } = render(
        <PickerGroup {...props} options={options} />
      );
      const input = container.querySelector("input")!;

      fireEvent(input, new MouseEvent("click", { bubbles: true }));

      expect(props.onChange).toHaveBeenCalledTimes(1);
    });
  });
});

export {};

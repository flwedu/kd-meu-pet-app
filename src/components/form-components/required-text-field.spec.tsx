import { fireEvent, render } from "@testing-library/react";
import { RequiredTextField } from "./required-text-field";

describe("Required Text Field component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Should render a text component properly", () => {
    const props = {
      name: "test",
      type: "text",
      placeholder: "Test placeholder",
      bordered: true,
      value: "",
      onChange: jest.fn(),
    };

    const { container } = render(<RequiredTextField {...props} />);

    expect(container).toMatchSnapshot();
  });

  test("Should render a password component properly", () => {
    const props = {
      name: "test",
      type: "password",
      placeholder: "Test placeholder",
      value: "",
      onChange: jest.fn(),
    };

    const { container } = render(<RequiredTextField {...props} />);

    expect(container).toMatchSnapshot();
  });

  test("Should call the onChange method", () => {
    const props = {
      name: "test",
      type: "text",
      placeholder: "Test placeholder",
      value: "",
      onChange: jest.fn(),
    };

    const { container } = render(<RequiredTextField {...props} />);
    const input = container.querySelector("input")!;

    fireEvent.change(input, { target: { value: "123" } });
    expect(props.onChange).toBeCalledTimes(1);
  });
});

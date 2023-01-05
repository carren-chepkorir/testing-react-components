import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders react components", () => {
  render(<App />);
  const TodoComponent = screen.getByTestId("todo");
  const GreeterComponent = screen.getByTestId("greeter");
  expect(TodoComponent).toBeInTheDocument();
  expect(GreeterComponent).toBeInTheDocument();
});

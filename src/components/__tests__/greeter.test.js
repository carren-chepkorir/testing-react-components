import { render, screen } from "@testing-library/react";
import Greeter from "../Greeter";
test("correctly renders without a name", () => {
  render(<Greeter />);
  const StrangerElement = screen.getByText(/Stranger/i);
  expect(StrangerElement).toBeInTheDocument();
});

test("correctly renders with a name ", () => {
  render(<Greeter name="Carren" />);
  const GreeterComponent = screen.getByText(/Carren/i);
  expect(GreeterComponent).toBeInTheDocument();
});

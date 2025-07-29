 import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio app without crashing", () => {
  render(<App />);

  // Update the text here based on what you see on your actual homepage
  const element = screen.getByText(/welcome to my portfolio/i);
  expect(element).toBeInTheDocument();
});


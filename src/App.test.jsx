import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";
describe("Personal Blog", () => {
  test("displays the blog name and articles", () => {
    render(<App />);

    expect(screen.getByRole("heading", {
      name: "Stacy's Blog"
    })).toBeInTheDocument();

    expect(screen.getByText("My Journey into Software Development"))
      .toBeInTheDocument();

    expect(screen.getByText("My Experience Learning React"))
      .toBeInTheDocument();
  });
});
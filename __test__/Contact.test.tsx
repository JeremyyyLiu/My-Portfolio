import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "../src/components/Contact";

describe("Contact", () => {
  test("renders Contact component", () => {
    render(<Contact />);

    expect(screen.getByText("04. What is Next?")).toBeInTheDocument();
    expect(screen.getByText("Get In Touch")).toBeInTheDocument();
    expect(
      screen.getByText(
        "My inbox is always open for new ideas and inspirations. Whether you have a question or just want to say hi, I will try my best to get back to you!"
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Say Hello")).toBeInTheDocument();

    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute(
      "href",
      "mailto:jeremy.zeyuliu@gmail.com"
    );
  });
});

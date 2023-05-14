import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "../src/components/About";

describe("About", () => {
  test("renders About component", () => {
    render(<About />);

    expect(screen.getByText("01.")).toBeInTheDocument();
    expect(screen.getByText("About Me")).toBeInTheDocument();
    expect(screen.getByText(/Hello! My name is Jeremy/i)).toBeInTheDocument();
    expect(
      screen.getByText(/I enjoy creating things that live on the Internet/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Javascript/i)).toBeInTheDocument();
    expect(screen.getByText(/Typescript/i)).toBeInTheDocument();
    expect(screen.getByText(/React/i)).toBeInTheDocument();
    expect(screen.getByText(/Next.js/i)).toBeInTheDocument();
    expect(screen.getByText(/Node.js/i)).toBeInTheDocument();
    expect(screen.getByText(/Nest.js/i)).toBeInTheDocument();
    expect(screen.getByText(/HTML/i)).toBeInTheDocument();
    expect(screen.getByText(/Material UI/i)).toBeInTheDocument();
    expect(screen.getByText(/Tailwindcss/i)).toBeInTheDocument();
    expect(screen.getByText(/MongoDB/i)).toBeInTheDocument();
    expect(screen.getByText(/PostgreSQL/i)).toBeInTheDocument();
    expect(screen.getByText(/Docker/i)).toBeInTheDocument();
    expect(screen.getByText(/Git\/Github/i)).toBeInTheDocument();
    expect(screen.getByText(/AWS/i)).toBeInTheDocument();
    expect(screen.getByText(/Vercel/i)).toBeInTheDocument();

    const imageElement = screen.getByAltText("image");
    expect(imageElement).toBeInTheDocument();
  });
});

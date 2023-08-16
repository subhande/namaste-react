import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// beforeAll(() =>  {
//     console.log("Before All");
// })

// beforeEach(() => {
//     console.log("Before Each");
// })

// afterEach(() => {
//     console.log("After Each");
// })

// afterAll(() => {
//     console.log("After All");
// })


describe("Contact Component Page Test Case", () => {
  it("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).to;
  });

  it("Should load  button inside Contact Component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside Contact Component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("Name");
    expect(inputName).toBeInTheDocument();
  });

  test("should load two input boxes on the Contact Component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes);
    expect(inputBoxes.length).toBe(2);
  });
});

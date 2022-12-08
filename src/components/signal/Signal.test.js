import { fireEvent, render, screen } from "@testing-library/react";
import Signal from "./Signal";

describe("Signal", () => {
  it("default - low", () => {
    render(<Signal />);

    const value = screen.getByText("Low");

    expect(value).toBeInTheDocument();
  });

  it("test level 5 - high", () => {
    render(<Signal />);

    const levelFive = screen.getByTestId("signal_bar_5");
    const levelFour = screen.getByTestId("signal_bar_4");
    const levelThree = screen.getByTestId("signal_bar_3");
    const levelTwo = screen.getByTestId("signal_bar_2");
    const levelOne = screen.getByTestId("signal_bar_1");

    fireEvent.click(levelFive);

    const value = screen.getByTestId("signal_value");
    expect(value).toContainHTML("High");

    expect(levelFive).toHaveClass("signal__filled");
    expect(levelFour).toHaveClass("signal__filled");
    expect(levelThree).toHaveClass("signal__filled");
    expect(levelTwo).toHaveClass("signal__filled");
    expect(levelOne).toHaveClass("signal__filled");
  });

  it("test level 4 - high", () => {
    render(<Signal />);

    const levelFive = screen.getByTestId("signal_bar_5");
    const levelFour = screen.getByTestId("signal_bar_4");
    const levelThree = screen.getByTestId("signal_bar_3");
    const levelTwo = screen.getByTestId("signal_bar_2");
    const levelOne = screen.getByTestId("signal_bar_1");

    fireEvent.click(levelFour);

    const value = screen.getByTestId("signal_value");
    expect(value).toContainHTML("High");

    expect(levelFive).toHaveClass("signal__unfilled");
    expect(levelFour).toHaveClass("signal__filled");
    expect(levelThree).toHaveClass("signal__filled");
    expect(levelTwo).toHaveClass("signal__filled");
    expect(levelOne).toHaveClass("signal__filled");
  });

  it("test level 3 - Average", () => {
    render(<Signal />);

    const levelFive = screen.getByTestId("signal_bar_5");
    const levelFour = screen.getByTestId("signal_bar_4");
    const levelThree = screen.getByTestId("signal_bar_3");
    const levelTwo = screen.getByTestId("signal_bar_2");
    const levelOne = screen.getByTestId("signal_bar_1");

    fireEvent.click(levelThree);

    const value = screen.getByTestId("signal_value");
    expect(value).toContainHTML("Average");

    expect(levelFive).toHaveClass("signal__unfilled");
    expect(levelFour).toHaveClass("signal__unfilled");
    expect(levelThree).toHaveClass("signal__filled");
    expect(levelTwo).toHaveClass("signal__filled");
    expect(levelOne).toHaveClass("signal__filled");
  });

  it("test level 2 - Low", () => {
    render(<Signal />);

    const levelFive = screen.getByTestId("signal_bar_5");
    const levelFour = screen.getByTestId("signal_bar_4");
    const levelThree = screen.getByTestId("signal_bar_3");
    const levelTwo = screen.getByTestId("signal_bar_2");
    const levelOne = screen.getByTestId("signal_bar_1");

    fireEvent.click(levelTwo);

    const value = screen.getByTestId("signal_value");
    expect(value).toContainHTML("Low");

    expect(levelFive).toHaveClass("signal__unfilled");
    expect(levelFour).toHaveClass("signal__unfilled");
    expect(levelThree).toHaveClass("signal__unfilled");
    expect(levelTwo).toHaveClass("signal__filled");
    expect(levelOne).toHaveClass("signal__filled");
  });

  it("test level 1 - Low", () => {
    render(<Signal />);

    const levelFive = screen.getByTestId("signal_bar_5");
    const levelFour = screen.getByTestId("signal_bar_4");
    const levelThree = screen.getByTestId("signal_bar_3");
    const levelTwo = screen.getByTestId("signal_bar_2");
    const levelOne = screen.getByTestId("signal_bar_1");

    fireEvent.click(levelOne);

    const value = screen.getByTestId("signal_value");
    expect(value).toContainHTML("Low");

    expect(levelFive).toHaveClass("signal__unfilled");
    expect(levelFour).toHaveClass("signal__unfilled");
    expect(levelThree).toHaveClass("signal__unfilled");
    expect(levelTwo).toHaveClass("signal__unfilled");
    expect(levelOne).toHaveClass("signal__filled");
  });
});

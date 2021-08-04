import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Mondaine from "../index.tsx";

it("renders clock", () => {
  const { getByTestId } = render(<Mondaine />);

  expect(getByTestId("face")).toBeInTheDocument();
  expect(getByTestId("hours")).toBeInTheDocument();
  expect(getByTestId("minutes")).toBeInTheDocument();
  expect(getByTestId("hour-hand")).toBeInTheDocument();
  expect(getByTestId("minute-hand")).toBeInTheDocument();
  expect(getByTestId("second-hand")).toBeInTheDocument();
});

it("renders custom element", () => {
  const TestLabel = "Hello World";
  const { findByText } = render(
    <Mondaine>
      <div>{TestLabel}</div>
    </Mondaine>
  );

  expect(findByText(TestLabel)).toBeInTheDocument();
});

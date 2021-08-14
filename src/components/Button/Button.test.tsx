import React from "react";
import * as ReactDom from "react-dom";
import Button from "./Button";

describe("test Screen One page", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);

    ReactDom.render(<Button clicked={() => {}} name="" theme="" />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("render custom button to exist in page", () => {
    const BtnElement = container.querySelectorAll("button");
    expect(BtnElement[0].className).toBeTruthy();
    expect(BtnElement[0]).toBeEnabled();
  });

  it("check for props in custome button", () => {
    const BtnElement = container.querySelectorAll("button");
    expect(BtnElement[0].className).toBe("btnStyle primary");
    expect(BtnElement[0].type).toBe("submit");
  });

  it("check for button Validate", () => {
    const BtnElement = container.querySelectorAll("button");
    expect(BtnElement[0].willValidate).toBeTruthy();
  });
});

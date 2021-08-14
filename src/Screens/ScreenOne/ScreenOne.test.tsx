import React from "react";
import { fireEvent } from "@testing-library/dom";
import * as ReactDom from "react-dom";
import ScreenOne from "../ScreenOne/ScreenOne";
const mockFn = jest.fn(() => true);

describe("test Screen One page", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);

    ReactDom.render(<ScreenOne setScreenNum={() => {}} />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("render start button to exist in page" ,()=>{
    const startBtnElement = container.querySelectorAll("button");
    expect(startBtnElement).toHaveLength(1);
    expect(startBtnElement[0].className).toBe('btnStyle primary');
  })

  it("render start button to routing from this page" ,()=>{
    const startBtnElement = container.querySelectorAll("button");
    fireEvent.click(startBtnElement[0]) 
    expect(mockFn()).toBe(true);

  })




  
});

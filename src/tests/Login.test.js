import React from "react"
import {render, queryByTestId, queryByPlaceholderText} from "@testing-library/react"
import Login from "../components/Login"

it("renders correctly", () =>{
    const{queryByTestId,queryByPlaceholderText} = render(<Login/>);
    expect(queryByTestId("about")).toBeTruthy();
    expect(queryByTestId("google-sign-in")).toBeTruthy();
    expect(queryByTestId("description")).toBeTruthy();
})
import React from "react"
import {render, fireEvent, queryByTestId, queryByPlaceholderText, queryAllByPlaceholderText} from "@testing-library/react"
import Settings from "../components/Settings";

it("renders correctly", () => {
    // Test to ensure that objects render
    const {queryByTestId, queryByPlaceholderText} = render(<Settings/>);
    expect(queryByTestId("dropdown-item-one")).toBeTruthy();
    expect(queryByTestId("danger-button")).toBeTruthy();
    expect(queryByTestId("success-button")).toBeTruthy();
    expect(queryByTestId("dropdown-menu")).toBeTruthy();
    expect(queryByTestId("dropdown-item-two")).toBeTruthy();
    expect(queryByTestId("dropdown-item-three")).toBeTruthy();
    expect(queryByTestId("dropdown-item-four")).toBeTruthy();
    expect(queryByTestId("dropdown-trigger")).toBeTruthy();
    expect(queryByTestId("column")).toBeTruthy();
    expect(queryByTestId("modal-card-body")).toBeTruthy();
    expect(queryByTestId("settingsmodalbg")).toBeTruthy();
})
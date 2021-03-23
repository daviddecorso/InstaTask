import React from "react"
import {render, fireEvent, queryByTestId, queryByPlaceholderText, queryAllByPlaceholderText} from "@testing-library/react"
import AddTask from "./components/addTask";

it("renders correctly", () => {
    // Test to ensure that objects render
    const {queryByTestId, queryByPlaceholderText} = render(<AddTask/>);
    expect(queryByTestId("add-button")).toBeTruthy();
    expect(queryByTestId("submit-button")).toBeTruthy();
    expect(queryByTestId("modal-close")).toBeTruthy();
    expect(queryByPlaceholderText("eventName")).toBeTruthy();
    expect(queryByPlaceholderText("eventDescription")).toBeTruthy();
})

describe("Input value", () => {
    it("updates on change", () =>{
        const {queryByPlaceholderText} = render(<AddTask/>);

        // Test to ensure event name input changes based on user input
        const eventNameInput = queryByPlaceholderText('eventName');
        fireEvent.change(eventNameInput, {target : {value : "test"}});
        expect(eventNameInput.value).toBe("test");

        // Test to ensure event description input changes based on user input
        const eventDescriptionInput = queryByPlaceholderText('eventDescription');
        fireEvent.change(eventDescriptionInput, {target : {value : "test"}});
        expect(eventDescriptionInput.value).toBe("test");
    })
})


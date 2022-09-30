import CustomSelect from "../CustomSelect";
import React from "react";
import {
    render,
    fireEvent,
    screen,
    findAllByRole,
} from "@testing-library/react";

test("Should have two links", async () => {
    render(
        <CustomSelect
            options={["Hello", "World"]}
            placeholder="hi"
            values={[]}
            onClick={() => console.log("clicked")}
            name="test"
            clear={() => console.log("cleared")}
        />
    );

    fireEvent.click(screen.getByText("hi"));
    const buttons = await screen.findAllByRole("button");
    expect(buttons).toHaveLength(3);
});

import React from "react";
import { create } from "react-test-renderer";

describe("ProfileStatus component", () => {
    test("", () => {
        const component = create(<Button text="SUBSCRIBE TO BASIC" />);
        const instance = component.getInstance();
        expect(instance.state.text).toBe("");
    });
});
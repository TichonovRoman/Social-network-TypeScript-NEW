import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {

    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="Social Network" />);
        const instance = component.getInstance();
        // @ts-ignore
        expect(instance?.state.status).toBe("Social Network");
    });
    test("after creation span should by displayed", () => {
        const component = create(<ProfileStatus status="Social Network" />);
        const root = component.root;
        let span = root?.findByType("span")
        // @ts-ignore
        expect(span).not.toBeNull()
    });
    test("after creation input should by displayed", () => {
        const component = create(<ProfileStatus status="Social Network" />);
        const root = component.root;

        // @ts-ignore
        expect(() => {
            let input = root?.findByType("input")
        }).toThrowError()
    });

    test("after creation span should contains correct status", () => {
        const component = create(<ProfileStatus status="Social Network" />);
        const root = component.root;
        let span = root?.findByType("span")
        // @ts-ignore
        expect(span?.children[0]).toBe("Social Network");
    });
    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="Social Network" />);
        const root = component.root;
        let span = root?.findByType("span")
        span?.props.onDoubleClick();
        let input = root.findByType("input")
        // @ts-ignore
        expect(input.props.value).toBe("Social Network");
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status="Social Network" updateStatus={mockCallback} />);
        const instance = component.getInstance();
        // @ts-ignore
        instance?.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);

    });




});



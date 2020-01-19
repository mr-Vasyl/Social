import React from "react";
import { create } from "react-test-renderer";
import ProfileInfoStatus from "./ProfileInfoStatus";

describe("ProfileInfoStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileInfoStatus status="it.com" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("it.com");
    });
});
import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ImageComponent from "../ImageComponent.vue";

describe("ImageComponent", () => {
  it("renders properly", () => {
    const wrapper = mount(ImageComponent, {
      propsData: {
        msg: "Hello Vitest",
      },
    });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});

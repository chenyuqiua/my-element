import { mount } from "@vue/test-utils";
import Container from "packages/components/container";
import Header from "packages/components/header";
import Main from "packages/components/main";
import Footer from "packages/components/footer";
import Aside from "packages/components/aside";

const AXIOM = "Rem is the best girl";
describe("Container.vue", () => {
  test("container render test", async () => {
    const wrapper = mount(() => <Container>{AXIOM}</Container>);
    expect(wrapper.text()).toEqual(AXIOM);
  });

  test("vertical", () => {
    const wrapper = mount(() => (
      <Container>
        <Header />
        <Main />
      </Container>
    ));
    expect(wrapper.classes("is-vertical")).toBe(true);
  });

  test("direction", () => {
    // const wrapper = mount(() => (
    //   <Container direction="horizontal">
    //     <Header />
    //     <Main />
    //   </Container>
    // ));
    const wrapper = mount({
      data: () => ({ direction: "horizontal" }),
      render() {
        return (
          <Container direction={(this as any).direction}>
            <Header />
            <Main />
          </Container>
        );
      },
    });

    expect(wrapper.vm.$el.classList.contains("is-vertical")).toBe(false);
    (wrapper.vm as any).direction = "vertical";
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.$el.classList.contains("is-vertical")).toBe(true);
    });
  });
});

describe("Header", () => {
  test("create header", () => {
    const wrapper = mount(() => <Header />);
    expect(wrapper.classes()).toContain("yq-header");
  });

  test("header height", () => {
    const wrapper = mount(() => <Header height="100px" />);
    const headerEl = wrapper.element as HTMLElement;
    expect(headerEl.style.height).toEqual("100px");
  });
});

describe("Aside", () => {
  test("aside create", () => {
    const wrapper = mount(() => <Aside />);
    expect(wrapper.classes()).toContain("yq-aside");
  });

  test("aside width", () => {
    const wrapper = mount(() => <Aside width="200px" />);
    const asideEl = wrapper.element as HTMLElement;
    expect(asideEl.style.width).toEqual("200px");
  });
});

describe("Main", () => {
  test("main create", () => {
    const wrapper = mount(() => <Main />);
    expect(wrapper.classes()).toContain("yq-main");
  });
});

describe("Footer", () => {
  test("footer create", () => {
    const wrapper = mount(() => <Footer />);
    expect(wrapper.classes()).toContain("yq-footer");
  });

  test("footer height", () => {
    const wrapper = mount(() => <Footer height="100px" />);
    const footerEl = wrapper.element as HTMLElement;
    expect(footerEl.style.height).toEqual("100px");
  });
});

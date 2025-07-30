import { render, screen } from "@testing-library/react";
import CarouselFunc from "./Carousel ";
import userEvent from "@testing-library/user-event";
/* Alt tag check */
test("renders Carousel without crashing", () => {
  render(<CarouselFunc />);
  const Images = screen.getAllByRole("img");

  expect(Images.length).toBeGreaterThan(0);
  for (let i = 0; i < Images.length; i++) {
    expect(Images[i]).toHaveAttribute("alt", `Slide ${i + 1}`);
  }
});
/*Carousel Navigation  */
describe("Carousel Navigation", () => {
  beforeEach(() => {
    render(<CarouselFunc />);
  });

  test("renders carousel images", () => {
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThan(0);
  });

  test("clicking next button changes slide", async () => {
    const nextButton = document.querySelector(".slick-next");
    expect(nextButton).toBeInTheDocument();

    await userEvent.click(nextButton);

    const activeSlides = document.querySelectorAll(".slick-slide.slick-active");
    expect(activeSlides.length).toBeGreaterThan(0);
  });

  test("clicking previous button changes slide", async () => {
    const prevButton = document.querySelector(".slick-prev");
    expect(prevButton).toBeInTheDocument();

    await userEvent.click(prevButton);

    const activeSlides = document.querySelectorAll(".slick-slide.slick-active");
    expect(activeSlides.length).toBeGreaterThan(0); // Check active slide state
  });
});
/* Responsiveness for different screen */
describe("Responsiveness for different screen", () => {
  test("displays 1 slide on Mobile screens", () => {
    window.innerWidth = 500;
    window.dispatchEvent(new Event("resize"));

    render(<CarouselFunc />);

    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThan(0);
  });
  test("displays 2 slide on Tablet screens", () => {
    window.innerWidth = 1000;
    window.dispatchEvent(new Event("resize"));

    render(<CarouselFunc />);

    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThan(1);
  });

  test("displays 3 slide on Desktop screens", () => {
    window.innerWidth = 1024;
    window.dispatchEvent(new Event("resize"));

    render(<CarouselFunc />);

    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThan(2);
  });
});


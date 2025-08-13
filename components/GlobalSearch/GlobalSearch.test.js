import { render, screen } from "@testing-library/react";
import GlobalSearch from "./GlobalSearch";
import { ThemeColor } from "@/context/ThemeContext";
import userEvent from "@testing-library/user-event";

const defaultProps = {
  query: "",
  setQuery: jest.fn(),
};

const renderWithTheme = (ui, themeValue) => {
  return render(
    <ThemeColor.Provider value={{ theme: themeValue }}>
      {ui}
    </ThemeColor.Provider>
  );
};

describe("GlobalSearch Component - Dual Theme", () => {
  const themes = ["Light", "Dark"];

  //  Test rendering for both themes
  test.each(themes)("renders correctly in theme", (theme) => {
    renderWithTheme(<GlobalSearch {...defaultProps} />, theme);
    const input = screen.getByPlaceholderText(/search/i);
    expect(input).toBeInTheDocument();
  });

  //  Test typing functionality in both themes
  test.each(themes)(
    "updates query on typing in theme",
    async (theme) => {
      const user = userEvent.setup();
      const setQueryMock = jest.fn();

      renderWithTheme(
        <GlobalSearch {...defaultProps} setQuery={setQueryMock} />,
        theme
      );

      const input = screen.getByPlaceholderText(/search/i);
      await user.type(input, "Hello");

      expect(setQueryMock).toHaveBeenCalled();
    }
    );
    
test.each(themes)(
  "updates query on typing in theme and displays it",
  async (theme) => {
    const user = userEvent.setup();

    let queryValue = "";
    const setQueryMock = jest.fn((val) => {
      queryValue = val;
      rerenderWithTheme();
    });

    const { rerender } = renderWithTheme(
      <GlobalSearch {...defaultProps} query={queryValue} setQuery={setQueryMock} />,
      theme
    );

    function rerenderWithTheme() {
      rerender(
        <ThemeColor.Provider value={{ theme }}>
          <GlobalSearch {...defaultProps} query={queryValue} setQuery={setQueryMock} />
        </ThemeColor.Provider>
      );
    }

    const input = screen.getByPlaceholderText(/search/i);
    await user.type(input, "Hello");

    expect(setQueryMock).toHaveBeenCalled();
    expect(input).toHaveValue("Hello");
  }
);

});
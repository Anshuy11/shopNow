import { render, screen, fireEvent } from "@testing-library/react";
import ConfirmationModal from "./ConfirmationModel";

describe("ConfirmationModal", () => {
  const setUp = ({
    isOpen = true,
    title,
    message,
    onClose = jest.fn(),
    onConfirm = jest.fn(),
    closeSidebar = jest.fn(),
  }) => {
    if (!title || !message) {
      throw new Error("Title or Meassage is not found.");
    }
    const utils = render(
      <ConfirmationModal
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={onConfirm}
        closeSidebar={closeSidebar}
        title={title}
        message={message}
      />
    );
    return {
      ...utils,
      onClose,
      onConfirm,
      closeSidebar,
      };
      
    };
     afterEach(() => {
    jest.clearAllMocks();
  });
  test("When isOpen is true", () => {
    const message = "Are you sure you want to logout.";
    const title = "Log out";
    setUp({ title, message });
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(message)).toBeInTheDocument();
  });
  test("calls onClose when Cancel button is clicked", () => {
    const message = "Are you sure you want to logout.";
    const title = "Log out";
    const { onClose } = setUp({ title, message });

    const cancelButtons = screen.getAllByText("Cancel");
    fireEvent.click(cancelButtons[0]);

    expect(onClose).toHaveBeenCalledTimes(1);
  });
    test("calls onConfirm, onClose, closeSidebar on mobile Confirm", () => {
       const message = "Are you sure you want to logout.";
        const title = "Log out";
        const { onClose, onConfirm, closeSidebar } = setUp({ title, message });

    const confirmButtons = screen.getAllByText("Confirm");
    fireEvent.click(confirmButtons[0]);

    expect(onConfirm).toHaveBeenCalled();
    expect(onClose).toHaveBeenCalled();
    expect(closeSidebar).toHaveBeenCalled(); 
    })
   
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Task Dashboard", () => {
  test("adds a new task", async () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Add item");
    const addButton = screen.getByRole("button", { name: /add task/i });

    await userEvent.type(input, "Buy milk");
    await userEvent.click(addButton);

    expect(screen.getByText("Buy milk")).toBeInTheDocument();
  });

  test("toggles task status", async () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Add item");
    const addButton = screen.getByRole("button", { name: /add task/i });

    await userEvent.type(input, "Learn testing");
    await userEvent.click(addButton);

    const checkbox = screen.getByRole("checkbox");
    await userEvent.click(checkbox);

    expect(
      screen.getByRole("button", { name: "Completed" }),
    ).toBeInTheDocument();
  });

  test("deletes a task", async () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Add item");
    const addButton = screen.getByRole("button", { name: /add task/i });

    await userEvent.type(input, "Task to delete");
    await userEvent.click(addButton);

    const deleteButton = screen.getByRole("button", { name: /delete/i });
    await userEvent.click(deleteButton);

    expect(screen.queryByText("Task to delete")).not.toBeInTheDocument();
  });
});

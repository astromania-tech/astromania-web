import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { vi } from "vitest";
import { AllTheProviders, RouterWrapper, ThemeWrapper } from "./test-wrappers";

// Custom render function
export const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AllTheProviders, ...options });

// Custom render with only router
const renderWithRouter = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: RouterWrapper, ...options });

// Custom render with only theme
const renderWithTheme = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: ThemeWrapper, ...options });

// Mock functions for common use cases
export const mockNavigate = vi.fn();
export const mockLocation = {
  pathname: "/",
  search: "",
  hash: "",
  state: null,
  key: "test",
};

// Mock router hooks
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
    useLocation: () => mockLocation,
    BrowserRouter: ({ children }: { children: React.ReactNode }) => children,
  };
});

// Test data generators
export const generateTestUser = () => ({
  id: "test-user-1",
  name: "Test User",
  email: "test@example.com",
});

export const generateTestEvent = () => ({
  id: "test-event-1",
  type: "click",
  timestamp: Date.now(),
});

// Async test helpers
export const waitForLoadingToFinish = () =>
  new Promise((resolve) => setTimeout(resolve, 0));

// Custom assertions
export const expectElementToBeVisible = (element: HTMLElement) => {
  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();
};

export const expectElementToHaveAccessibleName = (
  element: HTMLElement,
  name: string,
) => {
  expect(element).toHaveAccessibleName(name);
};

// Re-export everything from testing-library
export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";

// Re-export our custom render as the default render
export { customRender as render, renderWithRouter, renderWithTheme };

// Re-export test wrappers for convenience
export { AllTheProviders, RouterWrapper, ThemeWrapper } from "./test-wrappers";

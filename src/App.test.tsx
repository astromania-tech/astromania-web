import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

// Mock the components to avoid complex dependencies
vi.mock("./contexts/ThemeContext", () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="theme-provider">{children}</div>
  ),
}));

vi.mock("./components/Header", () => ({
  default: () => <header data-testid="header">Header</header>,
}));

vi.mock("./components/Footer", () => ({
  default: () => <footer data-testid="footer">Footer</footer>,
}));

vi.mock("./pages/Home", () => ({
  default: () => <div data-testid="home-page">Home Page</div>,
}));

vi.mock("./pages/About", () => ({
  default: () => <div data-testid="about-page">About Page</div>,
}));

vi.mock("./pages/Services", () => ({
  default: () => <div data-testid="services-page">Services Page</div>,
}));

vi.mock("./pages/Contact", () => ({
  default: () => <div data-testid="contact-page">Contact Page</div>,
}));

// Mock Material-UI components
vi.mock("@mui/material", () => ({
  Box: ({ children, component, ...props }: any) => {
    const Component = component || "div";
    return (
      <Component style={props.sx} {...props}>
        {children}
      </Component>
    );
  },
}));

// Mock react-router-dom
vi.mock("react-router-dom", () => ({
  BrowserRouter: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="router">{children}</div>
  ),
  Routes: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="routes">{children}</div>
  ),
  Route: ({ element }: { element: React.ReactNode }) => (
    <div data-testid="route">{element}</div>
  ),
}));

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(screen.getByTestId("router")).toBeInTheDocument();
  });

  it("renders theme provider", () => {
    render(<App />);
    expect(screen.getByTestId("theme-provider")).toBeInTheDocument();
  });

  it("renders header component", () => {
    render(<App />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("renders footer component", () => {
    render(<App />);
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("renders main content area", () => {
    render(<App />);
    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();
  });

  it("has proper layout structure", () => {
    render(<App />);
    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();

    // Check that the main element is styled with flexGrow: 1
    expect(mainElement).toHaveStyle({ flexGrow: "1" });
  });

  it("renders routing structure", () => {
    render(<App />);
    expect(screen.getByTestId("routes")).toBeInTheDocument();
  });

  it("provides proper component structure", () => {
    render(<App />);

    // Should have all main components
    expect(screen.getByTestId("theme-provider")).toBeInTheDocument();
    expect(screen.getByTestId("router")).toBeInTheDocument();
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
  });
});

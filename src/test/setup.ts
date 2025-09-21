// Vitest test setup file
import { expect, afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";

// Extend Vitest's expect with jest-dom matchers
expect.extend(matchers);

// Clean up after each test
afterEach(() => {
  cleanup();
});

// Mock Material-UI hooks
vi.mock("@mui/material/useMediaQuery", () => ({
  default: vi.fn(() => false), // Default to desktop view
}));

vi.mock("@mui/material/styles", () => ({
  useTheme: vi.fn(() => ({
    breakpoints: {
      down: vi.fn(() => "(max-width:900px)"),
      up: vi.fn(() => "(min-width:900px)"),
    },
    palette: {
      mode: "light",
      primary: { main: "#1976d2" },
      secondary: { main: "#dc004e" },
    },
    spacing: vi.fn((factor) => `${8 * factor}px`),
  })),
  createTheme: vi.fn(() => ({})),
  ThemeProvider: ({ children }: { children: React.ReactNode }) => children,
}));

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  root: Element | null = null;
  rootMargin: string = "";
  thresholds: ReadonlyArray<number> = [];

  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
};

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

// Mock scrollTo
Object.defineProperty(window, "scrollTo", {
  writable: true,
  value: () => {},
});

// Mock HTMLElement.scrollIntoView
Object.defineProperty(HTMLElement.prototype, "scrollIntoView", {
  writable: true,
  value: () => {},
});

// Mock crypto.randomUUID for tests
Object.defineProperty(global, "crypto", {
  value: {
    randomUUID: () =>
      "test-uuid-" + Math.random().toString(36).substring(2, 15),
  },
});

// Global test utilities
export const mockLocalStorage = {
  getItem: (key: string) => window.localStorage.getItem(key),
  setItem: (key: string, value: string) =>
    window.localStorage.setItem(key, value),
  removeItem: (key: string) => window.localStorage.removeItem(key),
  clear: () => window.localStorage.clear(),
};

// Mock environment variables for tests
process.env.NODE_ENV = "test";

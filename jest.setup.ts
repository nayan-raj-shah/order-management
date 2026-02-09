import "@testing-library/jest-dom";
import "whatwg-fetch";
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      refresh: jest.fn(),
    };
  },
}));

jest.mock("next/server", () => ({
  NextResponse: {
    json: (body?: Body, init?: ResponseInit) =>
      new Response(JSON.stringify(body), init),
  },
}));
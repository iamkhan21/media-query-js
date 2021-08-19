import { MediaQuery } from "./index";

describe("MediaQuery", function () {
  it("should initialize", function () {
    const query = "(max-width: 600px)";

    const mediaQuery = new MediaQuery(query, jest.fn);

    expect(mediaQuery instanceof MediaQuery).toBeTruthy();
    expect(mediaQuery.media).toBe(query);
    expect(mediaQuery.matches).toBeFalsy();
  });
});

import { afterEach, assert, describe, it } from "vitest";
import { restoreAll, spy, spyOn } from "nanospy";
import { MediaQuery } from "../src";

describe("MediaQuery", function () {
  afterEach(() => {
    restoreAll();
  });

  it("should initialize", function () {
    spyOn(window, "matchMedia", (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: spy(), // deprecated
      removeListener: spy(), // deprecated
      addEventListener: spy(),
      removeEventListener: spy(),
      dispatchEvent: spy(),
    }));

    const query = "(max-width: 600px)";

    const mediaQuery = new MediaQuery(query, () => {});

    assert.equal(mediaQuery.media, query);
    assert.isNotOk(mediaQuery.matches);
  });
});

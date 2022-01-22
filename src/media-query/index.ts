import type { ChangeEvent, ChangeEventCallback } from "./types";

/**
 * Wrap for window.matchMedia with convenient subscription/unsubscription on resize event
 *
 * ### Example (es imports)
 * ```js
 * import { MediaQuery } from 'media-query-js'
 * const mq = MediaQuery("(max-width: 600px)",(matches) => console.log(matches));
 * console.log(mq.matches); // => true or false (dependent of dom state)
 * mq.on();
 * // if state of DOM will change our callback from constructor will print in console
 * // => true or false (dependent of query to dom state)
 *
 * @param query {string} Media query that we like to check
 * @param callback {ChangeEventCallback} Function that will be triggered on resize event
 */
export class MediaQuery {
  private readonly mediaQueryList: MediaQueryList;
  private readonly callback: ChangeEventCallback;

  constructor(query: string, callback: ChangeEventCallback) {
    MediaQuery.isWindowExist();
    this.mediaQueryList = window.matchMedia(query);
    this.callback = callback;

    this.callback(this.mediaQueryList.matches);
  }

  get media(): string {
    return this.mediaQueryList.media;
  }

  get matches(): boolean {
    return this.mediaQueryList.matches;
  }

  public static checkQuery(query: string): boolean {
    MediaQuery.isWindowExist();
    return window.matchMedia(query).matches;
  }

  private static isWindowExist() {
    if (typeof window === "undefined") {
      throw new Error(`This library can be executed only on client side.`);
    }
  }

  public on(): void {
    if (this.mediaQueryList.addEventListener) {
      this.mediaQueryList.addEventListener("change", this.onChange);
    } else {
      // This method has been kept for backward compatibility
      this.mediaQueryList.addListener(this.onChange);
    }
  }

  public off(): void {
    if (this.mediaQueryList.removeEventListener) {
      this.mediaQueryList.removeEventListener("change", this.onChange);
    } else {
      // This method has been kept for backward compatibility
      this.mediaQueryList.removeListener(this.onChange);
    }
  }

  private onChange = ({ matches }: ChangeEvent): void => {
    this.callback(matches);
  };
}

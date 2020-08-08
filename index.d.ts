declare module "maskman.js" {
  /**
   * Converts `string` to [snake case](https://en.wikipedia.org/wiki/snake_case).
   *
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the snake cased string.
   */
  export function snake_case(string?: string): string;
  /**
   * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
   *
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the camel cased string.
   */
  export function camelCase(string?: string): string;
  export class MaskMan {
    /**
     * Create a MaskMan instance.
     * @param {any} [data=null] array or object you want to convert.
     */
    constructor(data?: any);

    /**
     * Create a MaskMan instance.
     * @static
     * @param {any} [data=null] array or object you want to convert.
     * @returns {MaskMan} converted array or object.
     */
    static convert(data?: any): MaskMan;

    /**
     * Convert all key in an object by converter.
     * @param {converterCallback} converter callback function convert keys to the case style you want.
     * @returns {R} converted array or object.
     */
    public to<R>(converter: (string: string) => string): R;

    /**
     * This callback is displayed as part of the Requester class.
     * @callback converterCallback
     * @param {string} string original string.
     * @returns {string} converted string.
     */
  }
}

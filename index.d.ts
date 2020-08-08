declare module "maskman.js" {
  export function snake_case(string?: string): string;
  export function camelCase(string?: string): string;
  export class MaskMan {
    constructor(data?: any);
    static convert(data?: any): MaskMan;
    public to<R>(converter: (string: string) => string): R;
  }
}

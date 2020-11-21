declare module 'polished' {
  export interface RGB {
    red: number;
    green: number;
    blue: number;
  }

  export function parseToRgb(color: string): RGB
  export function rgba(color: string, opacity: number): string
  export function getValueAndUnit(value: string): [number, string]
}

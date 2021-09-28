// const COLORS: string[] = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

// export function decodedValue([firstCol, secondCol]: string[]): number {
//   return (COLORS.indexOf(firstCol) * 10) + COLORS.indexOf(secondCol);
// }

const COLORS =
  [`black`,
    `brown`,
    `red`,
    `orange`,
    `yellow`,
    `green`,
    `blue`,
    `violet`,
    `grey`,
    `white`,] as const

// this is to disallow passing e.g. 'pink' to constructor
export type Color = typeof COLORS[number]

export function decodedValue([firstCol, secondCol]: Color[]): number {
  return (COLORS.indexOf(firstCol) * 10) + COLORS.indexOf(secondCol);
}
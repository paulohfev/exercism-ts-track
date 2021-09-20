const COLORS: string[] = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export function decodedValue([firstCol, secondCol]: string[]): number {
  return (COLORS.indexOf(firstCol) * 10) + COLORS.indexOf(secondCol);
}
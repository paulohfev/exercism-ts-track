export const COLORS: string[] =  ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export const colorCode = (col: string): number => {
  return COLORS.indexOf(col);
}

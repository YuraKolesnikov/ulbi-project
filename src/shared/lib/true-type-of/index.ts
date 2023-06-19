/**
 * Returns the true type of a given value as a string.
 * @param v The value whose type is to be determined.
 * @returns A string representing the true type of the value.
 */
export const trueTypeOf = (v: any): string => {
  // @ts-ignore
  return ({}).toString.call(v).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
};

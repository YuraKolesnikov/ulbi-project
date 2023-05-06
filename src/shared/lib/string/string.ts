export const capitalize = (str: string): string =>
  typeof str === 'string' && str.length > 0
    ? `${str.charAt(0).toUpperCase()}${str.substring(1)}`
    : ''
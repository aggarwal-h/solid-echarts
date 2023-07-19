/**
 * A utility method to check if a variable is a string.
 *
 * @param value - The variable to be checked.
 * @returns Whether or not the value passed is of type string or not.
 */
const typeIsString = (value: any): boolean =>
  typeof value === "string" || value instanceof String;

/**
 * A utility method to check if a variable is a function.
 *
 * @param value - The variable to be checked.
 * @returns Whether or not the value passed is a function.
 */
const typeIsFunction = (value: any): boolean => typeof value === "function";

export { typeIsString, typeIsFunction };

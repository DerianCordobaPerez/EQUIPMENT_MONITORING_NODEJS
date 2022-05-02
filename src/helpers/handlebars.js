/**
 * If the length of the string is greater than the length argument, then execute the block, otherwise
 * execute the inverse block
 * @param str - The string to check the length of.
 * @param length - The length to check against
 * @param options - The options object is a special object that contains all the Handlebars template
 * data.
 * @returns the options.fn(this) if the string is longer than the length, otherwise it returns the
 * options.inverse(this).
 */
function checkLength(str, length, options) {
  if(str.length > length) {
    return options.fn(this)
  }

  return options.inverse(this)
}

/**
 * "If the argument is a string, return the string with whitespace removed from the beginning and end.
 * Otherwise, return an empty string."
 * 
 * The first line of the function is a guard clause. It checks the type of the argument and returns
 * early if it's not a string
 * @param str - The string to trim.
 * @returns the trimmed string.
 */
function trim(str) {
  if(typeof str !== 'string') {
    return ''
  }

  return str.trim()
}

/**
 * If the argument is a string, return the first character capitalized and concatenated with the rest
 * of the string. Otherwise, return an empty string.
 * @param str - The string to capitalize.
 * @returns The first letter of the string is being capitalized and the rest of the string is being
 * returned.
 */
function capitalize(str) {
  if(typeof str !== 'string') {
    return ''
  }

  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
}

export default { 
  checkLength, 
  trim, 
  capitalize 
}
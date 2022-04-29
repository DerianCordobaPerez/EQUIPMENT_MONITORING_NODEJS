function checkLength(str, length, options) {
  if(str.length > length) {
    return options.fn(this)
  }

  return options.inverse(this)
}

function trim(str) {
  if(typeof str !== 'string') {
    return ''
  }

  return str.trimEnd().trimStart()
}

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
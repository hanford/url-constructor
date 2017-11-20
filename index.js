const NEEDS_VALUE = /\?|&|:/
const QUERY_PARAMS = /\?|&/

module.exports = function UrlConstruct (url, params) {
  const splitUrl = url.split('/')

  return splitUrl
    .map((piece) => Populate(piece, params))
    .join('/')
}

function Populate (piece, params) {
  let key = piece.substring(0)
  const needsValue = key.substring(0, 1) === ':' // determine if we're value or a static string ('value' || ':value')

  if (needsValue) {
    // let's trim the string to remove the colon
    key = key.substring(1)
  }

  const hasQuery = key.match(NEEDS_VALUE)

  if (hasQuery) {
    const queryParams = key.substring(hasQuery.index, key.length)
    key = key.substring(0, hasQuery.index)

    const qp = queryParams
      .split(QUERY_PARAMS)
      .filter(Boolean)
      .map(sect => {
        return sect
          .split(':')
          .map(j => j.match(/=/) ? j : getValue(j, params))
          .join('')
      })
      .join('&')

    return (needsValue ? getValue(key, params) : key) + '?' + qp
  } else {
    return needsValue ? getValue(key, params) : key
  }
}

function getValue (key, params) {
  // undefined check b/c sometimes we want falsey values
  return params[key] === 'undefined' ? key : params[key]
}

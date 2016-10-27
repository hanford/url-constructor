module.exports = function (url, params) {
  var splitUrl = url.split('/')

  return splitUrl
    .map(function (piece) {
      // does the parameter have a ':'? If not, let's return it the static piece of the route.
      if (piece.substring(0, 1) === ':') {
        // Otherwise, let's trim the string to remove the colon
        var key = piece.substring(1)

        // is the colonless string in the params object?
        if (params[key] === 'undefined') {
          // No? Let's console.error.
          console.error(key, ' not passed in the parameter object')
        } else {
          // awesome it's in the param object, let's return the value, instead of the string
          return params[key]
        }
      } else {
        return piece
      }
    })
    .join('/')
}

### url-constructor

Given a url with parameters defined by colons, we can match the key and replace it with values from an object:

```js
const urlConstruct = require('url-constructor')

const url = '/orders/:id'
const id = 123

urlConstruct(url, { id })
// '/orders/123'
```

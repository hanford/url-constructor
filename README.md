### url-constructor

Given a url with parameters defined by colons, we can match the key and replace it with values from an object:

```js
const urlConstruct = require('url-constructor')

const url = '/orders/:id'
const id = 123

urlConstruct(url, { id })
// '/orders/123'
```

Or a more complex situation with query params
```js
const urlConstruct = require('url-constructor')

const url = '/orders/:id?cancel=:cancel'
const id = 123
const cancel = true

urlConstruct(url, { id, cancel })
// '/orders/123?cancel=true'
```

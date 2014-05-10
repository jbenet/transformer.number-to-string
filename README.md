# transformer.number-to-string

[Transformer](http://github.com/jbenet/transformer) conversion: number to string

This module is a transformer conversion, published on npm. Read more about transformer at:

- the transformer website: <http://transform.datadex.io>
- the transformer repository: <http://github.com/jbenet/transformer>

## Usage

Use this module through transformer.


### Commandline

```
> echo '<SAMPLE INPUT>' | transform number string
<SAMPLE OUTPUT>
```

### Javascript

```js
var transformer = require('dat-transformer');
var tNumberToString = transformer('number', 'string');
tNumberToString('<SAMPLE INPUT>'); // '<SAMPLE OUTPUT>'
```

JSON-YAML Toggle
====

Toggle JSON and YAML in Browser!

```json
{
  "name": "json-yaml-toggle",
  "version": "1.0.0",
  "description": "Toggle JSON and YAML in Browser!",
  "main": "index.js",
  "directories": {
    "doc": "docs",
    "test": "test"
  },
  "scripts": {
    "build": "webpack ./src/content-script.js ./package/content-script.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Yosuke Torii",
  "license": "MIT",
  "dependencies": {
    "js-yaml": "^3.9.0"
  },
  "devDependencies": {
    "webpack": "^3.3.0"
  }
}
```
```yaml
name: json-yaml-toggle
version: 1.0.0
description: Toggle JSON and YAML in Browser!
main: index.js
directories:
  doc: docs
  test: test
scripts:
  build: webpack ./src/content-script.js ./package/content-script.js
  test: 'echo "Error: no test specified" && exit 1'
author: Yosuke Torii
license: MIT
dependencies:
  js-yaml: ^3.9.0
devDependencies:
  webpack: ^3.3.0
```

## Usage

Just right-click and choose "Toggle JSON/YAML".


## How it works

It works with following rules:

1. Find outermost `<pre>` or `<code>` element from the clicked element.
2. If no such element is found, nothing happens at all.
3. If `JSON.parse(element.textContent)` succeeds, turn it into YAML.
4. If (3) fails, assume it YAML and try to turn it into JSON.
5. If (4) succeeds, assign the result to `element.textContent`.
6. If (4) fails, nothing happens at all.

Note: If element is nested like `<pre><code> { "foo": "bar" } </code></pre>`, inner elements will be broken and won't come back. If it matters in some cases, please let me know.


## License

MIT

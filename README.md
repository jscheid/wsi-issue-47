Integration test for webpack-subresource-integrity with
optimize-css-assets-webpack-plugin.

See https://github.com/waysact/webpack-subresource-integrity/issues/47

To use:
- `yarn install`
- `yarn build`
- `yarn server`
- open URL with SRI-capable browser (e.g. recent Chrome)
- background should be white and console should show an error along the lines of:

```
Failed to find a valid digest in the 'integrity' attribute for resource 'http://127.0.0.1:8080/styles.css' with computed SHA-256 integrity 'l2F7fk7Wy0wNPkZVpFD9angKir7+SKuMLNuOCisZ23c='. The resource has been blocked.
```

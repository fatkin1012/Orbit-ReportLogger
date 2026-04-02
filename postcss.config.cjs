const prefixer = require('postcss-prefix-selector')

module.exports = {
  plugins: [
    prefixer({
      prefix: '#plugin-report-logger',
      transform(prefix, selector, prefixedSelector) {
        if (selector.startsWith('html') || selector.startsWith('body') || selector.startsWith(':root')) {
          return prefix
        }
        return prefixedSelector
      },
    }),
  ],
}

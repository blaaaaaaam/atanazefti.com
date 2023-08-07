const path = require('path')
const prettier = require('prettier')

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets')
  // eleventyConfig.addPassthroughCopy('src/*.png');
  eleventyConfig.addPassthroughCopy('CNAME')

  eleventyConfig.addShortcode(
    'aBlank',
    (text, url) => `<a href="${url}" target="_blank">${text}</a>`
  )

  eleventyConfig.addTransform('prettier', function (content, outputPath) {
    const extname = path.extname(outputPath)
    switch (extname) {
      case '.html':
        const parser = extname.replace(/^./, "")
        return prettier.format(content, { parser })
      default:
        return content;
    }
  })

  return {
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      includes: 'layouts',
      output: 'docs'
    }
  }
}

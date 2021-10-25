const path = require('path')
const prettier = require('prettier')
const fastglob = require('fast-glob')

const work = fastglob.sync(['**/work/*', '!**/docs'])

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets')
  eleventyConfig.addPassthroughCopy('CNAME')

  eleventyConfig.addLayoutAlias('work', 'work.njk')
  eleventyConfig.setTemplateFormats([
    'md',
    'png',
    'jpg'
  ])

  eleventyConfig.addCollection('work', function(collection) {
    return work
  })

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
    markdownTemplateEngine: 'liquid',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',

    dir: {
      input: 'src',
      includes: 'layouts',
      output: 'docs'
    }
  }
}

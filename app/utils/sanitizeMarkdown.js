const { marked } = require('marked');
const sanitizeHTMLLibrary = require('sanitize-html');
const TurndownService = require('turndown');

const turndownService = new TurndownService();

function sanitizeMarkdownData(markdownContent) {
  const convertedHTML = marked.parse(markdownContent);
  //   console.log('ConvertedHTML===>', convertedHTML);

  const sanitizeHTML = sanitizeHTMLLibrary(convertedHTML, {
    allowedTags: sanitizeHTMLLibrary.defaults.allowedTags.concat('img'),
  });
  //   console.log('sanitizeHTML===>', sanitizeHTML);

  const sanitizeMarkdown = turndownService.turndown(sanitizeHTML);
  //   console.log('sanitizeMarkdown===>', sanitizeMarkdown);

  return sanitizeMarkdown;
}

module.exports = sanitizeMarkdownData;

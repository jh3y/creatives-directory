const directory = require('./directory')
const fs = require('fs')

let markdown = `
# Creatives directory 📖

A list of creatives to follow on Twitter ✨

| Name  | Twitter Handle |
| ------| -------------- |
`

for (const creative of directory.sort(Intl.Collator().compare)) {
  markdown += `|${creative.name}|[@${creative.twitter}](https://twitter.com/@${creative.twitter})|\n`
}

markdown += `
### Contributing

1. Add someone to \`directory.js\`
2. Run \`node generate.js\`
3. Open a Pull Request 👍

------------------------

Put together by [@jh3y](https://jhey.dev) ⌨️
`

console.info('Markdown generated 🐻')

fs.writeFileSync(`${process.cwd()}/README.md`, markdown, 'utf-8')

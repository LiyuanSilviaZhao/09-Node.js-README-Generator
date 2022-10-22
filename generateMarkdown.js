function licenseBadge(license) {
    if (license !== "no license") {
        return `[![license](https://img.shields.io/badge/license-${license}-blue)](https://shields.io)`
    } else {
        return '';
    }
}

function generateMarkdown(data) {
    return `
${licenseBadge(data.license)}
# ${data.title}

## Description
${data.description}

## Table-of-Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
GitHub(https://github.com/${data.githubUsername})

Feel free to contact me if you have any questions.
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
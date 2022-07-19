// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributor](#contributor)
  * [Tests](#tests)
  ${renderLicenseTOC(data.license)}
  * [Questions](#questions)

  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Contributor
  
  ${data.contributor}
  
  ## Tests
  
  ${data.tests}
  
  ${renderLicenseSection(data.license)}
  
  ## Questions?
  
  Contact me on [github.com/${data.github}](https://github.com/${data.github}) or email me at [${data.email}](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  licenses.forEach(element => {
    if (element.name == license) {
      badge = `[![License: ${element.name}](${element.badge})](${element.link})`;
    }
  });
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

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

const licenses = [{
  name: 'Apache 2.0',
  badge: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
  link: 'https://opensource.org/licenses/Apache-2.0'
},
{
  name: 'GNU GPL 3.0',
  badge: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
  link: 'https://www.gnu.org/licenses/gpl-3.0'
},
{
  name: 'MIT',
  badge: 'https://img.shields.io/badge/License-MIT-yellow.svg',
  link: 'https://opensource.org/licenses/MIT'
},
{
  name: 'BSD 2-Clause',
  badge: 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg',
  link: 'https://opensource.org/licenses/BSD-2-Clause'
},
{
  name: 'BSD 3-Clause',
  badge: 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
  link: 'https://opensource.org/licenses/BSD-3-Clause'
},
{
  name: 'Boost 1.0',
  badge: 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg',
  link: 'https://www.boost.org/LICENSE_1_0.txt'
},
{
  name: 'CC0 1.0',
  badge: 'https://licensebuttons.net/l/zero/1.0/80x15.png',
  link: 'http://creativecommons.org/publicdomain/zero/1.0/'
},
{
  name: 'Eclipse Public 2.0',
  badge: 'https://img.shields.io/badge/License-EPL_2.0-red.svg',
  link: 'https://opensource.org/licenses/EPL-2.0'
},
{
  name: 'GNU Affero GPL 3.0',
  badge: 'https://img.shields.io/badge/License-AGPL_v3-blue.svg',
  link: 'https://www.gnu.org/licenses/agpl-3.0'
},
{
  name: 'GNU GPL 2.0',
  badge: 'https://img.shields.io/badge/License-GPL_v2-blue.svg',
  link: 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
},
{
  name: 'GNU Lesser GPL 3.0',
  badge: 'https://img.shields.io/badge/License-LGPL_v3-blue.svg',
  link: 'https://www.gnu.org/licenses/lgpl-3.0'
},
{
  name: 'Mozilla Public 2.0',
  badge: 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg',
  link: 'https://opensource.org/licenses/MPL-2.0'
},
{
  name: 'The Unlicense',
  badge: 'https://img.shields.io/badge/license-Unlicense-blue.svg',
  link: 'http://unlicense.org/'
}];

function getLicenseNames() {
  let licenseNames = [];
  licenses.forEach((license) => licenseNames.push(license.name))
  return licenseNames;
}

module.exports = {
  generateMarkdown,
  getLicenseNames
};

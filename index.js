// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description of project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage information:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
        choices: ["none", ...getLicenseNames()]
    },
    {
        type: 'input',
        name: 'contributor',
        message: 'Contributor guidelines:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Test instructions:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Your github username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Your email address:'
    },

];

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
    name: 'Hippocratic 3.0',
    badge: 'https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg',
    link: 'https://firstdonoharm.dev'
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

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile(`README.md`, generateMarkdown(data), (err) =>
        err ? console.error(error) : console.log('README.md created!')
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([questions]).then((response) => {
        writeToFile(response);
    })
}
// Function call to initialize app
init();

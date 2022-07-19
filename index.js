// packages necessary for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// questions to ask the user
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
        choices: ["none", ...generateMarkdown.getLicenseNames()]
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


function writeToFile(data) {
    fs.writeFile(`newREADME.md`, generateMarkdown.generateNewMarkdown(data), (err) =>
        err ? console.error(error) : console.log('README.md created!')
    )
}

function init() {
    inquirer.prompt(questions).then((response) => {
        writeToFile(response);
    })
}

init();

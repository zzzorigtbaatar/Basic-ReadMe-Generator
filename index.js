// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project title:'
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
        choices: ["none", ...arg]
    },
    {
        type: 'input',
        name: 'Contributor',
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

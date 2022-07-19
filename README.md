# Basic-ReadMe-Generator

## Description 

This project aims to showcase my ability in utilizing NodeJS by presenting a command-line application that accepts user input and generates a customized ReadMe.md file.

![](./assets/videos/demo-readme-generator.mp4)

https://www.youtube.com/watch?v=zc7_J5-3qUo


## Usage

In order to do this project, I used the Inquirer module to obtain user input with interactive command line prompts.


```
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
    //etc.
];

function init() {
    inquirer.prompt(questions).then((response) => {
        writeToFile(response);
    })
}
```

I used the `node:fs` module to access the file system and write the generated readme to a .md file.
```
function writeToFile(data) {
    fs.writeFile(`newREADME.md`, generateMarkdown.generateNewMarkdown(data), (err) =>
        err ? console.error(error) : console.log('README.md created!')
    )
}
```

## Links

There is no deployed site for this app.

[Project Repository](https://github.com/zzzorigtbaatar/Basic-ReadMe-Generator)

## Credits

* Jerome Chenette, UC Berkeley Extension Coding BootCamp

* https://nodejs.org/api/fs.html

* https://www.npmjs.com/package/inquirer


## License

[LICENSE](/LICENSE)

## Contact

https://www.linkedin.com/in/zorizulkhuu/

https://github.com/zzzorigtbaatar
// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown.js")


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Title:',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Discription:',
        name: 'discription',
    },
    {
        type: 'input',
        message: 'Installation:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Usage:',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'License:',
        name: 'license',
        choices: ['MIT License', 'ISC License', 'Eclipse Public License 1.0', 'None'],
    },
    {
        type: 'input',
        message: 'Contributing:',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Tests:',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Github Username:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Email Address:',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown.generateMarkdown(data), (err) => err ? console.log(err) : console.log('README created'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => writeToFile("createdREADME.md", data))
}

// Function call to initialize app
init();

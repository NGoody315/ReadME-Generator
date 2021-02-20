// TODO: Include packages needed for this application

const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'project',
            message: 'What is the name of your project? (Required)'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a description of your project (Required):'
        },
        {
            type: 'confirm',
            name: 'contents',
            message: 'Would you like to add a table of contents?',
            default: false
        },
        {
            type: 'input',
            name: 'install',
            message: 'Write your installation steps:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide examples on how to use your project:'
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Please add the GitHub link for any other collaborators on this project:'
        },
        {
            type: 'input',
            name: 'license',
            message: 'Add license here:'
        }
    ])
};

questions().then(answers => console.log(answers));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

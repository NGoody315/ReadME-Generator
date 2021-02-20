// TODO: Include packages needed for this application

const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {//Project Name
            type: 'input',
            name: 'project',
            message: 'What is the name of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide a name for the project.');
                    return false;
                }
            }
        },
        {//Project Description
            type: 'input',
            name: 'description',
            message: 'Write a description of your project (Required):',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide a description for the project.');
                    return false;
                }
            }
        },
        {//Confirm Table of Contents
            type: 'confirm',
            name: 'confirmTable',
            message: 'Would you like to add a table of contents?',
            default: true
        },
        {//Table of Contents
            type: 'input',
            name: 'table',
            message: 'Provide a section in your table of contents:',
            when: ({confirmTable}) => {
                if (confirmTable){
                    return true;
                } else {
                    return false;
                }
            }
        },
        {//Installation
            type: 'input',
            name: 'install',
            message: 'Write your installation steps:'
        },
        {//Usage
            type: 'input',
            name: 'usage',
            message: 'Provide examples on how to use your project (Required):',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide examples for the project.');
                    return false;
                }
            }
        },
        {//Credits/Collaborations
            type: 'input',
            name: 'credits',
            message: 'Please add the GitHub link for any other collaborators on this project:'
        },
        {//License
            type: 'input',
            name: 'license',
            message: 'Add license here:'
        },
        {//Questions - GitHub
            type: 'input',
            name: 'github',
            message: 'What is your GitHub Username?'
        },
        {//Questions - Email
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        }
    ])
};

questions().then(answers => console.log(answers));

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();

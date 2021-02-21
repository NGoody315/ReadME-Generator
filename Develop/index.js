// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');

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
            type: 'checkbox',
            name: 'license',
            message: 'Which license are attributed to your project? Check all that apply.',
            choices: ['Apache', 'Boost', 'BSD2', 'BSD3', 'Eclipse', 'GNU GPLv3', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Perl', 'SIL', 'Unlicense', 'WTFPL', 'Zlib']
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

// TODO: Create a function to write README file
questions()
.then((answers) => {

    fs.writeFile('./README.md', generatePage({...answers}), err => {
        if(err) throw new Error (err);

        console.log('ReadMe created!')
    });
});


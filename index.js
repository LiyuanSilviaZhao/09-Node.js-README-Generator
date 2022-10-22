const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the project title.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide description.',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter description.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter installation.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage info.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter usage.');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ['MIT','GPLv3', 'Apache', 'BSD_2', 'Boost_1.0', 'EPL_1.0', 'no license']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contributing info',
        validate: contributingInput => {
            if (contributingInput) {
                return true;
            } else {
                console.log('Please enter contributing.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide tests info.',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Please enter tests.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Provide github Username',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter github username.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Provide email',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter email.');
                return false;
            }
        }
    },
]

function writeToFile(data) {
    fs.writeFile("newREADME.md", data, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
};

function init() {
    inquirer.prompt(questions)
        .then(function (userInput) {
            writeToFile(generateMarkdown(userInput));
        });

}

init();
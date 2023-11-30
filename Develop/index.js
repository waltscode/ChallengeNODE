// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'


}, {
    type: 'input',
    name: 'installation',
    message: 'how did you install the node packages?',

},
{
    type: 'input',
    name: 'description',
    message: 'briefly describe your project',

},
{
    type: 'input',
    name: 'usage',
    message: 'what is the usage of this app?',
},
{
    type: 'input',
    name: 'contribution',
    message: 'What are the contribution guidelines?',
},
{
    type: 'input',
    name: 'test',
    message: 'Summary of the test instructions?'
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email?',

},
{
    type: 'input',
    name: 'github',
    message: 'What is your github username?',
},
{
    type: 'list',
    name: 'license',
    message: 'Choose the license you will be using',
    choices: ['MIT', 'Apache2.0', 'GNU3.0', 'none']
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created NewREADME.md!')
    )
}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            writeToFile('NewREADME.md', generateMarkdown(answers))
        })
}

// Function call to initialize app
init();

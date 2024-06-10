// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    { description: "describe what will be in this respiratory" },
    { installation: "are there any special instructions to install this?" },
    { usage: "how is the content in this repo meant to be used?" },
    { contributions: "what are the contribution guidelines?" },
    { tests: "how should tests be performed" },
    { username: "what is your github username?" },
    { email: "what is your email?" }
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // finsih down below so the "data" part works
    `## Description
    ${description}

    ## installation
    ${installation}

    ## Usage
    ${usage}

    ## contributions
    ${contributions}

    ## tests
    ${tests};`
}

function writeToFile(fileName, data) {
    return `# ${fileName}\n${data}`;
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions) 
    .then((answers) => writeToFile('README.md', generateREADME(answers)))
    .then(() => console.log('read the readmee'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();



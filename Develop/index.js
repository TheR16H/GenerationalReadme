// required packages
const inquirer = require('inquirer');
const fs = require('fs');
// these are the questions that will be asked to the user
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your repo?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'how would you describe the content in this Repo?'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Do any packages or the repo itself need to be installed to used? if so what are the specific instructions to do so?'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'How was this application intended to be used?'
    },
    {
        type: 'input',
        name: 'Contributions',
        message: 'Will any contributions be accepted?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How should tests be performed ?'
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'Whats the link to your github so the user can contact you for support if needed?'
    }
];

// i'm telling the function to grab the questions & the answers, also to add a line break (/n) so it displays correctly
inquirer.prompt(questions)
    .then(answers => {
        const formattedResponses = `# Name: ${answers.name}\n\n## Description:\n${answers.Description}\n\n## Installation:\n${answers.Installation}\n\n## Usage:\n${answers.Usage}\n\n## Contributions:\n${answers.Contributions}\n\n## Tests:\n${answers.tests}\n\n## Questions:\n${answers.Questions}\n\n`;

        // this will append the responses to a md file (README)
        fs.appendFile('README.md', formattedResponses, (err) => {
            if (err) throw err;
            console.log('README CREATION WAS A SUCCESS!!');
        });
    });

    
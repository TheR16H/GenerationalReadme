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
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose your License:',
        choices: ['Apache License 2.0', 'MIT', 'GNU General Public License v2.0', 'Mozilla Public License Version 2.0']
    }
];

// i'm telling the function to grab the questions & the answers, also to add a line break (/n) so it displays correctly and making the selected license a link!
inquirer.prompt(questions)
    .then(answers => {
        let licenseLink = '';
        switch (answers.license) {
            case 'Apache License 2.0':
                licenseLink = '[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)';
                break;
            case 'MIT':
                licenseLink = '[MIT](https://choosealicense.com/licenses/mit/)';
                break;
            case 'GNU General Public License v2.0':
                licenseLink = '[GNU General Public License v2.0](https://choosealicense.com/licenses/gpl-2.0/)';
                break;
            case 'Mozilla Public License Version 2.0':
                licenseLink = '[Mozilla Public License Version 2.0](https://choosealicense.com/licenses/mpl-2.0/)';
                break;
            default:
                licenseLink = 'License not specified';
        }

        let formattedResponses = `# ${answers.name}\n\n## Table of Contents\n- [Description](#description)\n- [Installation](#installation)\n- [Usage](#usage)\n- [Contributions](#contributions)\n- [Tests](#tests)\n- [Questions](#questions)\n- [License](#license)\n\n## Description\n${answers.Description}\n\n## Installation\n${answers.Installation}\n\n## Usage\n${answers.Usage}\n\n## Contributions\n${answers.Contributions}\n\n## Tests\n${answers.tests}\n\n## Questions\n${answers.Questions}\n## License\n${licenseLink}\n\n`;

        // Append the clickable link to the formattedResponses
        fs.appendFile('README.md', formattedResponses, (err) => {
            if (err) throw err;
            console.log('README CREATION WAS A SUCCESS!!');
        });
    });
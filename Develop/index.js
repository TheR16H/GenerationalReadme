// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    { name: 'description' , message: "what will this respiratory be about?" },
    { name: 'installation' , message:"are there any special instructions to install pr run this?" },
    { name: 'usage' , message: "how is the content in this repo meant to be used?" },
    { name: 'contributions' , message:"what are the contribution guidelines?" },
    { name: 'tests' , message:"how should tests be performed" },
    { name: 'username' , message: "what is your github username?" },
    { name: 'email', message: "what is your email?" }
];

// function generateREADME
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
    // finsih down below so the "data" part works
    function generateREADME(data) {

    return `## Description
    ${data.description}

    ## installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## contributions
    ${data.contributions}

    ## tests
    ${data.tests}`;
}

function writeToFile(fileName, data) {
    return `# ${fileName}\n${data}`;
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions) 
    .then((answers) =>{ 
        const readmeContent = generateREADME(answers);
        const fileName= 'README.md';
        const content = writeToFile(fileName, readmeContent)
        fs.writeFile(fileName, content, (err) => { 
            if (err) {
              console.error(err);
              return;
}
 console.log('README CREATION WAS A SUCCESS!!');
     });
  });
}
// Function call to initialize app
init();


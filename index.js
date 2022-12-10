// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name:"name",
            message:"What is your name",
        },
        {
            type: "input",
            name:"email",
            message:"What is your email?",
        },
        {
            type: "input",
            name:"github",
            message:"What is your github user name?",
        },
        {
            type: "input",
            name:"title",
            message:"What is the name of your project?",
        },
        {
            type: "input",
            name:"project description",
            message:"Describe your project:",
        },
        {
            type: "input",
            name:"languages",
            message:"How can this app be used?",
        },
        {
            type: "input",
            name:"requirements",
            message:"What are your instructions for installation?",
        },
        {
            type: "checkbox",
            name:"languages",
            message:"What languages did you use to build your app?",
            choices:["CSS", "HTML", "Javascript", "React", "Java", "SQL", "Python", "C++", "Ruby", "Swift", "PHP"]
        },
        {
            type: "checkbox",
            name: "license",
            message: "What license did you use?",
            choices: ["MIT License", "Apache License v2.0", "GNU General Public License v3.0", "Mozilla Public License 2.0"]
        },
        {
            type: "input",
            name:"usage",
            message:"How can this app be used?",
        },
        {
            type: "input",
            name:"contributors",
            message:"Who contributed to the app?",
        },
        {
            type: "input",
            name:"tests",
            message:"Instructions to run tests on the app:",
        },
        {
            type: "input",
            name:"Usage",
            message:"How can this app be used?",
        }
    ])
    .then((data) => {
        writeToFile(data);
    })
};    


// TODO: Create a function to write README file
function writeToFile(data) {
fs.writeFile('./dist/README.md', generateMarkdown(data), (err) =>
err ? console.error(err) : console.log('Readme file created successfuly!'));
}


// TODO: Create a function to initialize app
function init() {
    questions();
}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [

    {
        type: "input",
        name: "title",
        message: "What is the title of your Project?",
      },
      {
        type: "input",
        name: "description",
        message: "Provide a description of your project: What is the function of your application, what you are tasked with in this app, and the technology you used to create this app.",
      },
      {
        type: "input",
        name: "table of contents",
        message: "List your content for your table of contents."
      },
      {
        type: "input",
        name: "link",
        message: "Input your URL for the application here."
      },
      {
        type: "checkbox",
        name: "license",
        message: "Please select a license applicable to this project.",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
      },
      {
        type: "input",
        name: "usage",
        message: " List in steps how to use the application.",
      },
      {
        type: "input",
        name: "Contact",
        message: "Provide your valid email address,number, github repo.",
      },
      {
        type: "input",
        name: "credits",
        message: "Name and/or list who and/or what you used/asked for help.",
        default: "",
      },
      {
        type: "input",
        name: "Future Developments",
        message: "List what you would like to improve about this generator in the future.",
      },
];

// function to write README file
function writeToFile(fileName, data) {

  return fs.writeFileSync(path.join(process.cwd(), fileName), data);

}

//function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("generating README.md");
    writeToFile("./demo-README/README.md", generateMarkdown({ ...responses }));
  });
}
  init();

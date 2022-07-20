// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const gernerateMarkdown = require("./utils/generateMarkdown");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => {
  inquirer
    .prompt([
      //title
      {
        type: "input",
        name: "title",
        message: "What is the title of your project.",
        validate: (projectTitle) => {
          if (projectTitle) {
            return true;
          } else {
            console.log("You must enter the name of your project!");
            return false;
          }
        },
      },
      //description
      {
        type: "input",
        name: "description",
        message: "Enter a description for your project.",
        validate: (projectDescription) => {
          if (projectDescription) {
            return true;
          } else {
            console.log("You must enter a description for your project!");
            return false;
          }
        },
      },
      //installation
      {
        type: "input",
        name: "installation",
        message: "Explain how other users can install your project.",
        validate: (projectInstallation) => {
          if (projectInstallation) {
            return true;
          } else {
            console.log("You must explain how to install your project!");
            return false;
          }
        },
      },
      //Usage
      {
        type: "input",
        name: "usage",
        message: "Explain how to use your project/ application.",
        validate: (projectUsage) => {
          if (projectUsage) {
            return true;
          } else {
            console.log("Please explain how to use your project/ application!");
            return false;
          }
        },
      },
      //license
      {
        type: "checkbox",
        name: "license",
        message: "What License did you use for the project?",
        choices: ["MIT", "GPLv2", "Apache", "GPlv3", "BSD 3-clause", "None"],
      },
      //contribute
      {
        type: "input",
        name: "contribute",
        message:
          "What does the user need to know to help contribute to the project.",
        validate: (projectContributors) => {
          if (projectContributors) {
            return true;
          } else {
            console.log(
              "How would you like other user Contribute to your Project?"
            );
            return false;
          }
        },
      },
      {
        type: "input",
        name: "username",
        message: "Enter your Github username.",
        validate: (projectUsername) => {
          if (projectUsername) {
            return true;
          } else {
            console.log("Please enter your github username!");
            return false;
          }
        },
      },
      //github : questions
      {
        type: "input",
        name: "github",
        message: "Enter your Github URL.",
        validate: (projectUsage) => {
          if (projectUsage) {
            return true;
          } else {
            console.log("Please enter your Github URL!");
            return false;
          }
        },
      },
      //email : questions
      {
        type: "input",
        name: "email",
        message: "Enter an email for others to contact you.",
      },
    ])
    .then((data) => {
      console.log(data);
      fs.writeFile("./dist/README.md", generateMarkdown(data), (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("success");
        }
      });
    });
};

// Function call to initialize app
questions();

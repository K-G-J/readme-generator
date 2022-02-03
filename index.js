// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const generatePage = require('./src/page-template.js');

// TODO: Create an array of questions for user input
const questions = [];
// const promptUser = () => {
//     return inquirer.prompt ([
//         {
//             type: 'input',
//             name: 'name',
//             message: 'What is your name? (Required)',
//             validate: nameInput => {
//                 if (nameInput) {
//                     return true;
//                 } else {
//                     console.log('Please enter your name!');
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'github',
//             message: 'Enter your GitHub Username',
//             validate: githubUsernameInput => {
//                 if (githubUsernameInput) {
//                     return true;
//                 } else {
//                     console.log('Please enter your GitHub username!');
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'confirm',
//             name: 'confirmAbout',
//             message: 'Would you like to enter some information about yourself for an "About" section?',
//             default: true
//         },
//         {
//             type: 'input',
//             name: 'about',
//             message: 'Provide some information about yourself:',
//             when: ({confirmAbout}) => {
//                 if (confirmAbout) {
//                     return true;
//                 } else {
//                     return false;
//                 }
//             }
//         }
//     ]);
// }
// const promptProject = portfolioData => {
//     if (!portfolioData.projects) {
//         portfolioData.projects = [];
//     }
//     return inquirer.prompt ([
//         {
//             type: 'input',
//             name: 'name',
//             message: 'What is the name of your project?',
//             validate: projectNameInput => {
//                 if (projectNameInput) {
//                     return true;
//                 } else {
//                     console.log('Please enter your project name!');
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'description',
//             message: 'Provide a description of the project (Required)',
//             validate: projectDescriptionInput => {
//                 if (projectDescriptionInput) {
//                     return true;
//                 } else {
//                     console.log('Please enter your project description!');
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'checkbox',
//             name: 'languages',
//             message: 'What did you build this project with? (Check all that apply)',
//             choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstap', 'Node']
//         },
//         {
//             type: 'input',
//             name: 'link',
//             message: 'Enter the GitHub link to your project. (Required)',
//             validate: githubLinkInput => {
//                 if (githubLinkInput) {
//                     return true;
//                 } else {
//                     console.log('Please enter the GitHub link to your project!');
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'confirm',
//             name: 'feature',
//             message: 'Would you like to feature this project?',
//             default: false
//         },
//         {
//             type: 'confirm',
//             name: 'confirmAddProject',
//             message: 'Wold you like to enter another project?',
//             default: false
//         }
//     ])
//     .then(projectData => {
//         portfolioData.projects.push(projectData);
//         if (projectData.confirmAddProject) {
//             return promptProject(portfolioData);
//         } else {
//             return portfolioData;
//         }
//     });
// };

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// promptUser()
// .then(promptProject)
// .then (portfolioData => {
//     return generatePage(portfolioData)
// })
// .then(pageHTML => {
//     return writeFile(pageHTML)
// })
// .then (writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile()
// })
// .then(copyFileResponse => {
//     console.log(copyFileResponse);
// })
// .catch (err => {
//     console.log(err);
// });

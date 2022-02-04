// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if(!data.license) {
    return '';
  }
  return `
  ## License
  ![licenseBadge](https://img.shields.io/badge/License-$${data.license}-blue.svg)
  ${data.license}
  [Full license information](${data.licenseLink}).
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseSection(license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Tests](#tests)
  - [Questions](#contact)
  
  
  <a name="installation"></a>
  ## Installation
  ${data.installation}
  
  <a name="usage"></a>
  ## Usage
  ${data.usage}
  
  <a name="credits"></a>
  ## Credits
  ${data.credits}

  <a name="tests"></a>
  ## Tests
  ${data.credits}
  
  <a name="contact"></a>
  ## Questions 
  ${data.name} [email] (${data.email})
  [GitHub] (https://github.com/${data.githubusername})
`;
}

module.exports = {renderLicenseSection, generateMarkdown};



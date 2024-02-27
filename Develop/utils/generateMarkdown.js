// a function that returns a license badge based on which license is passed in


function renderLicenseBadge(license) {
  if (!license) {
      return "";
  }
  switch (license) {
      case "MIT License":
          return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      case "Apache License 2.0":
          return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      case "GNU General Puplic License v3.0":
          return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      default:
          return "";
  }

}

function renderLicenseSection(license) {
    if (!license) {
        return "";
    }
  
    return `## License:
    
    
    ${renderLicenseBadge(license)};
    ${renderLicenseLink(license)}`
  }
  
//  a function that returns the license link

function renderLicenseLink(license) {
  if (!license) {
      return "";
  }

  switch (license) {
      case "MIT License":
          return "https://opensource.org/licenses/MIT";
      case "Apache License 2.0":
          return "https://opensource.org/licenses/Apache-2.0";
      case "GNU General Puplic License v3.0":
          return "https://www.gnu.org/licenses/gpl-3.0";
      default:
          return "";
  }
}

// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
${data.tableofcontents}

## Link to Application
${data.link}

## How to use the Application
${data.usage}

## Contact Me-Information
${data.contact}

## Credits
${data.credits}

## Future Developments
${data.FutureDevelopments}
`;
}

module.exports = generateMarkdown;

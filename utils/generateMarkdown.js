// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license){ 
  switch(license){
    case "MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    case "Apache License v2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
    case "GNU General Public License v3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)]";
    case "Mozilla Public License 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]"
    default: 
      return " ";
  }
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license){
  switch(license){
    case "MIT License":
      return "(https://opensource.org/licenses/MIT)";
    case "Apache License v2.0":
      return "(https://opensource.org/licenses/Apache-2.0)";
    case "GNU General Public License v3.0":
      return "(https://www.gnu.org/licenses/gpl-3.0)";
    case "Mozilla Public License 2.0":
      return "(https://opensource.org/licenses/MPL-2.0)";
    default:
      return " "; 
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return " ";
  } else {
    return 
    "## License" 
    "The application is covered under the ${renderLicenseLink(license)} license";
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

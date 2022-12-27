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
  let generateLicense = ``; 
  for (i = 0; i < license.length; i++) {
    generateLicense += `${renderLicenseBadge(license[i])} ${renderLicenseLink[i]}` 
  } 
  return generateLicense;
};


//Create function that returns the language badge
function renderLanguageBadge(language) {
  switch(language){
    case "CSS":
      return "![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)";
    case "HTML":
      return "![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)";
    case "Bootstrap":
      return "![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)";
    case "Tailwind":
      return "![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)";
    case "Node.js":
      return "![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)";
    case "Javascript":
        return "![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)";
    case "React":
        return "![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)";    
    case "Java":
      return "![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white)";
    case "Ruby":
      return "![Ruby](https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white)";
    case "Python":
      return "![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)";
    case "C++":
      return "![C++](https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white)";
    case "Swift":
      return "![Swift](https://img.shields.io/badge/swift-F54A2A?style=for-the-badge&logo=swift&logoColor=white)";
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

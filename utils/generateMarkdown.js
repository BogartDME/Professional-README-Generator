//license badging
// If there is no license, return an empty string

function renderLicenseBadge(license){ 
  switch(license){
    case "MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    case "Apache License v2.0":
      return "[![License: Apache License v2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
    case "GNU General Public License v3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)]";
    case "Mozilla Public License 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]"
    default: 
      return " "
  }
}


//unction that returns the license link
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
      return " " 
  }
}

//function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseFinal(license) {
  let generateLicense = ``; 
  for (i = 0; i < license.length; i++) {
    generateLicense +=`${renderLicenseBadge(license[i])}${renderLicenseLink(license[i])}
    ` 
  } 
  return generateLicense;
};


//Create function that returns the language badge
function pickLanguageBadge(languages) {
  switch(languages){
    case "CSS":
      return "![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)";
    case "HTML":
      return "![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)";
    case "Bootstrap":
      return "![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)";
    case "Tailwind":
      return "![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)";
    case "Heroku":
      return "![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)";  
    case "Express.js":
      return "![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)";  
    case "Node.js":
      return "![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)";
    case "Javascript":
        return "![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)";
    case "React":
        return "![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)";    
    case "jQuery":
      return "![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)";
    case "MySQL":
      return "![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)";
    case "MongoDB":
      return "![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)";  
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
    default:
      return " "
    }
}

//eturn the language section of README
// If there is no language, return an empty string
function renderLanguageSection(languages) {
  let generateLanguage = ``; 
  for (i = 0; i < languages.length; i++) {
    generateLanguage += `${pickLanguageBadge(languages[i])}` 
  } 
  return generateLanguage;
};

//generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  <a id="readme-top"></a>
  
  
  <details close> 
  <summary> Table of Contents</summary><br/>
  
  - [Title](#title)
  - [License](#license)
  - [About the Project](#about-the-Project)
    - [Built With](#built-with)
    - [Visuals](#visuals)
  - [Access](#access)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Testing](#test)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Contact](#contact)
  - [Resources](#resources)
  

  </details>

  ## License
  
  ${renderLicenseFinal(data.license)}
  

---

## About the Project

  Hi, my name is ${data.name}, thank you for your interest in my project!

  ${data.about}

  ### Built With 

  ${renderLanguageSection(data.languages)}

    
  ### Visuals
  
  
  ![Alt full site image](./)




---

<p align="middle">(<a href="#readme-top">back to top</a>)</p>


## Access

  ### You can find my repository [HERE](${data.repo})


  ### [HERE](${data.URL}) is the link to the deployed application
  



## Getting Started

Here are some some things you will need to get started:

### Installation

${data.requirements}


### Testing

${data.tests}




## Usage

  ${data.usage}







## Contributors

  ${data.contributors}




## Contact

  If you would like to contact me with suggestions or would like to collaborate on a project feel free to contact me at ${data.email}

  Also please feel free to check out my Github to see other apps I have worked on: [${data.gitusername}](${data.github})




## Resources

  Here is a list of the resources that I used for the project ${data.resources}


  <p align="middle">(<a href="#readme-top">back to top</a>)</p>

`;
}

module.exports = generateMarkdown;

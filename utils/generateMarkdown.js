// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let renderLicenseBadge = (license) => {
  console.log(license);
  if (license === "MIT") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license === "GPLv2") {
    return "![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)";
  } else if (license === "Apache") {
    return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  } else if (license === "GPlv3") {
    return "![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)";
  } else if (license === "BSD 3-clause") {
    return "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
let renderLicenseLink = (license) => {
  if (license === "MIT") {
    return `MIT
Copyright (c) ${new Date().getFullYear()}
      
for more information about MIT License click [link](https://opensource.org/licenses/MIT)`;
  } else if (license === "GPLv2") {
    return `GPLv2
Copyright (c) ${new Date().getFullYear()}

for more information about GPlv2 license click [Link](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  } else if (license === "Apache") {
    return `Apache
Copyright (c) ${new Date().getFullYear()}

for more information about Apache license click [Link](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "GPlv3") {
    return `GPLv3
Copyright (c) ${new Date().getFullYear()}

for more information about GPLv3 license click [Link](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === "BSD 3-clause") {
    return `BSD 3-clause
Copyright (c) ${new Date().getFullYear()}

for more information about BSD 3-clause license click [Link](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (license === "None") {
    return `This application doesnt have any form of licensing`;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license[0])}
  # Description
  ${data.description}
  # Table of Contents
  * [Description](#discription)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Questions](#questions)
  
  # Installation
  ${data.installation}
  # Usage
  ${data.usage}
  # License
  ${renderLicenseLink(data.license[0])}
  # Contribution
  ${data.contribute}
  # Questions
  If you have any question you can contact here: 
  [${data.username}](${data.github})
email: ${data.email}
`
};

module.exports = generateMarkdown;

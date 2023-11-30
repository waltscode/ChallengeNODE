// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[MIT][![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache2.0') {
    return '[Apache 2.0][![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GNU3.0') {
    return '[GPL v3][![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else {
    return '';
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache2.0') {
    return '[Apache 2.0](http://www.apache.org/licenses/)';
  } else if (license === 'GNU3.0') {
    return '[GPL v3](https://www.gnu.org/licenses/gpl-3.0)';
  } else {
    return '';
}
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return 'This project is licensed under the MIT License.';
  } else if (license === 'Apache2.0') {
    return 'This project is licensed under the Apache 2.0 License.';
  } else if (license === 'GNU3.0') {
    return 'This project is licensed under the GNU General Public License v3.0.';
  } else {
    return '';
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseLink = renderLicenseLink(data.license);
  const licenseBadge = renderLicenseBadge(data.license); 
  const licenseSection = renderLicenseSection(data.license);
  return `# ${data.title}
  
## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Test
${data.test}

## Your E-mail
${data.email}

## Your Github ID
${data.github}

## License:
${licenseSection}

## Link to license URL
${licenseLink}

## Link to license Badge
${licenseBadge}

`;
}



module.exports = generateMarkdown; renderLicenseLink; renderLicenseBadge; 


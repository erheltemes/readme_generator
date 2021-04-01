// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  if (license === "ISC License") {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  }
  if (license === "Eclipse Public License 1.0") {
    return "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  }
  else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT License") {
    return "[MIT License](https://opensource.org/licenses/MIT)"
  }
  if (license === "ISC License") {
    return "[ISC License](https://opensource.org/licenses/ISC)"
  }
  if (license === "Eclipse Public License 1.0") {
    return "[Eclipse Public License 1.0](https://opensource.org/licenses/EPL-1.0)"
  }
  else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderTitle(title, license) {
  return `\n\n# ${title} ${renderLicenseBadge(license)}` 
}

function renderBasicSection(title, input) {
  if (input !== "") {
    tableOfContentsArr.push(title)
    return `\n\n## ${title}\n${input} `
  }
  else {return ""}
}

function renderLicenseSection(license) {
  if (license !== "" && license !== "None") {
    tableOfContentsArr.push("License")
    return `\n\n## License\n${renderLicenseLink(license)}`
  }
  else {return ""}
}

function renderQuestionSection(github, email) {
  if (github !== "" && email !== "") {
    tableOfContentsArr.push("Questions")
    return `\n\n## Questions\n[GitHub](https://github.com/${github})\n\nEmail: ${email}`
  }
  if (github !== "" && email === "") {
    tableOfContentsArr.push("Questions")
    return `\n\n## Questions\n[GitHub](https://github.com/${github})`
  }
  if (github === "" && email !== "") {
    tableOfContentsArr.push("Questions")
    return `\n\n## Questions\nEmail: ${email}`
  }
  else {return ""}
}

function tableList() { 
  let newArr = []
  tableOfContentsArr.forEach((value) => {
    newArr.push(`\n\n[${value}](#${value})`)
  })
  return newArr.join("")
}

function renderTableOfContents() {
  return `\n\n## Table of Contents${tableList()}`
}

const tableOfContentsArr = []

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {title, discription, installation, usage, license, contributing, tests, github, email} = data 

  let titleSection = `${renderTitle(title, license)}`
  let mainSection = `${renderBasicSection("Discription", discription)}${renderBasicSection("Installation", installation)}${renderBasicSection("Usage", usage)}${renderLicenseSection(license)}${renderBasicSection("Contributing", contributing)}${renderBasicSection("Tests", tests)}${renderQuestionSection(github, email)}`
  let tableOfContents = `${renderTableOfContents(tableOfContentsArr)}`

  return `${titleSection}${tableOfContents}${mainSection}`
}

module.exports = {generateMarkdown} 

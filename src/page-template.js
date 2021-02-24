function generatePage(data) {
return `
# ${data.project}

${data.description}

## Table of Contents
1. [Installation](#install)
2. [Usage](#usage)
3. [Collaborations](#collab)
4. [Licenses](#license)
5. [Questions](#question)

## <a name="install"/>Installation
${data.install}

## <a name="usage"/>Usage
${data.usage}

## <a name="collab"/>Collaborations
${data.credits}

## <a name="license"/>Licenses
${data.license}

## <a name="question"/>Questions
If you have any questions you can contact me through https://github.com/${data.github} or send me an email at : ${data.email}.
`;
}

module.exports = generatePage;
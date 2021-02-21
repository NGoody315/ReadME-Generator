function generatePage(data) {
return `
#${data.project}

${data.description}

##Table of Contents
-Installation (#install)
-Usage (#usage)
-Collaborations (#collab)
-Licenses (#license)
-Questions (#question)

<a name='install'></a>
##Installation
${data.install}

<a name='usage'></a>
##Usage
${data.usage}

<a name='collab'></a>
##Collaborations
${data.credits}

<a name='liscense'></a>
##Licenses
${data.license}

<a name='question'></a>
##Questions
If you have any questions you can contact me through <a href="https://github.com/${data.github}>GitHub</a> or sent me an email at : ${data.email}.
`;
}

module.exports = generatePage;
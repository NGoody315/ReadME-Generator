return `
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Project READMe</title>
    </head>

    <body>
    <h1>${project}</h1><br>

    <h2>Description</h2><br>
    <p>${description}</p><br>

    <h2>Table of Contents</h2><br>
    <h3><a href=#${table}">${table}</a></h3><br>

    <h2>Installation</h2><br>
    <p>${install}</p><br>

    <h2>Usage</h2><br>
    <p>${usage}</p><br>

    <h2>Credits</h2><br>
    <p>${credits}</p><br>

    <h2>License</h2><br>
    <p>${license}</p><br>

    <h2>Questions</h2><br>
    <p>${email}, ${github}</p><br>
    <p>If you have any questions, please, email me or find me on GitHub!"</p>
    
    </body>
    </html>
`
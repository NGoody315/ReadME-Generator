
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

    <div>
    <h2>Description</h2><br>
    <p>${description}</p><br>
    </div>
    
    <div>
    <h2>Table of Contents</h2><br>
    <h5><a href=#install>Installation</a></h5><br>
    <h5><a href=#usage>Usage</a></h5><br>
    <h5><a href=#credits>Credits</a></h5><br>
    <h5><a href=#license>License</a></h5><br>
    <h5><a href=#questions>Questions</a></h5><br>
    </div>

    <div>
    <h2 id='install'>Installation</h2><br>
    <p>${install}</p><br>
    </div>

    <div>
    <h2 id='usage'>Usage</h2><br>
    <p>${usage}</p><br>
    </div>

    <h2 id='credits'>Credits</h2><br>
    <p>${credits}</p><br>

    <h2 id='license'>License</h2><br>
    <p>${license}</p><br>

    <h2 id='questions'>Questions</h2><br>
    <p>${email}, ${github}</p><br>
    <p>If you have any questions, please, email me or find me on GitHub!"</p>
    
    </body>
    </html>
`;
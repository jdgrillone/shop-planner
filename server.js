const express = require('express');

// --CONFIGURE EXPRESS WEB FRAMEWORK--
const app = express();

// Set Port - process.env.PORT for hosting services
app.set('port', ( process.env.PORT || 3001 ));

// Start the server
app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${app.get('port')}`);
});
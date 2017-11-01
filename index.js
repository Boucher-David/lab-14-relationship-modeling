'use strict';
require("dotenv").config();

require(__dirname + '/lib/server').listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port: ${process.env.PORT || 3000}`);
    console.log('Did you run "npm run db" to ensure your mongdb database is running?');
});

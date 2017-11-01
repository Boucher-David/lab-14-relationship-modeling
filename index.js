'use strict';
require("dotenv").config();

require(__dirname + '/lib/server').listen(process.env.PORT || 3000);

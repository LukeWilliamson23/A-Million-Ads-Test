import * as http from 'http';

import app from './src/app'

require('dotenv').config({
  path: 'variables.env'
});

//const port = process.env.PORT || 5555
const port = 5555;

const server = http.createServer(app);
server.listen(port);

console.log(`running on port ${port}`);


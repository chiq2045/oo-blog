require('dotenv').config();

const server = require('./server');
const { PORT: port } = process.env;

server.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`)
});

import axios from 'axios';

export default axios.create({
  baseURL: 'https://fooddelivery-yogesh.vercel.app/',
});

//"start": "node ./backend/server.js",
//"start": "nodemon --watch backend --exec node --experimental-modules backend/server.js"
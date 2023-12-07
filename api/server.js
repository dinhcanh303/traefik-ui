const app = require("./src/app");
require("dotenv").config();

const nodeEnv = process.env.NODE_ENV;

require('dotenv').config({
    path: `.env.${nodeEnv}`
})
const PORT = process.env.PORT || 3003;
const server = app.listen(PORT, () => {
  console.log(`WSV Traefik UI start with port ${PORT}`);
});
process.on("SIGINT", () => {
  server.close(() => {
    console.log(`Exit WSV`);
  });
});
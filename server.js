const http = require("http");
const express = require("express");
const userRouter = require("./router/userRouter/userRouter");
require("./config/mongoDB")()

//!server
const app = express();
const server = http.createServer(app);
//Routers
app.use('/',userRouter)
//start the server
const PORT = process.env.PORT || 7766;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

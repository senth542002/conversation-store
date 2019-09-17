const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");


/*const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));*/

const PORT = process.env.PORT || 8000;

const server = express()
               .use(logger('dev'))
               .use(bodyParser.json())
               .use(bodyParser.urlencoded({ extended: true }))
               .listen(PORT, () => console.log(`Listening on ${ PORT }`));
               http.createServer(app);

const io = socketIo(server);

let interval;
io.on("connection", socket => {
    console.log("New client connected");
      if (interval) {
        clearInterval(interval);
      }
    interval = setInterval(() => getApiAndEmit(socket), 2000);
    socket.on("disconnect", () => console.log("Client Disconnected"));
});

require('./server/routes')(app);

const getApiAndEmit = async socket => {
  try {
    const res = await axios.get(
      "https://convesation-store-service.herokuapp.com/api/weightage/2"
    );
    socket.emit("FromAPI", res.data.weightage); // Emitting a new message. It will be consumed by the client
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
};

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;
// const express = require ("express");
// const cors = require("cors");
const app = require('./app');

require("./database");



// app.use(cors());
// app.use(express.json()); //lidar com requisicoes no formato json
// app.use(routes); 

app.listen(process.env.PORT || 8080);



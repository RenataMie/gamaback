const express = require ("express");
const cors = require("cors");
const routes = require("./routes");
const { propfind } = require("./routes");

require("./database");

const app = express();

app.use(cors());
app.use(express.json()); //lidar com requisicoes no formato json
app.use(routes); 



app.listen(8080);


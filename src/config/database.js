require("dotenv").config({
  path:process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

module.exports = {
  dialect: process.env.DB_DIALECT || "postgres",
  storage: "./__testes/database.sqlite",
  dialectOptions: {
    ssl: {              //primeiro erro - ssl:true
      require: true,            //segundo erro
      rejectUnauthorized: false //corrigido com essas duas linhas
    }
},  
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_SCHEMA,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};



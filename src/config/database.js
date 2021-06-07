require("dotenv/config");

module.exports = {
  dialect: "postgres",
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
    underscoredAll: true,
    freezeTableName: true
  }
};



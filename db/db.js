import dbConfig from "./db.config.js";
import Sequelize from "sequelize";
import Station from "./models/stations.model.js";

const sequelize = new Sequelize("trip_db", 'postgres', 'QWi72:(hd12Ua87JDk', {
  host: "127.0.0.1",
  dialect: 'postgres',
  operatorsAliases: false,
  /*pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }*/
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.stations = Station(db.sequelize, db.Sequelize);

export default db;
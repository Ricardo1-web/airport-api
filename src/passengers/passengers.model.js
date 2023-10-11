import { DataTypes } from "sequelize";
import sequelize from "../config/database/database.js";

export const Passenger = sequelize.define("passenger", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "passenger_id",
  },
  nroPassport: {
    type: DataTypes.BIGINT,
    unique: true,
    allowNull: false,
    field: "nro_passport",
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  surname: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  birthdate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  gender: {
    type: DataTypes.ENUM("male", "female", "prefer not to say"),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(150),
    allowNull: false,
    unique: true,
  },
  celphone: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  createdBy: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "created_by",
  },
  photo: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: "sinfoto",
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

import { Model, DataTypes, Optional } from "sequelize";

import sequelize from "../database/connection"

interface AddresAttributes {
  id: number;
  district: string;
  city: string;
  state: string;
  country: string;
}

interface AddresCreationAttributes extends Optional<AddresAttributes, "id"> {}

interface AddresInstance
  extends Model<AddresAttributes, AddresCreationAttributes>,
    AddresAttributes {}

const Addres = sequelize.define<AddresInstance>("addres", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
  },
  district: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Addres

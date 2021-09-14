import { Model, DataTypes, Optional } from "sequelize";
import Addres from "./addres"
import sequelize from "../database/connection"

// Recomendamos que você declare uma interface para os atributos, para verificação de tipos mais rígida
interface PropertyAttributes {
  id: number;
  title: string;
  codeNumber: string;
  typeOfHome: string;
  propertyFeatures: string;
  value: number;
  discription: string;
  characteristic : string;
}

// Alguns campos são opcionais ao chamar UserModel.create () ou UserModel.build ()
interface PropertyCreationAttributes extends Optional<PropertyAttributes, "id"> {}

// Precisamos declarar uma interface para nosso modelo que seja basicamente o que nossa classe seria
interface UserInstance
  extends Model<PropertyAttributes, PropertyCreationAttributes>,
    PropertyAttributes {}

const Property = sequelize.define<UserInstance>("property", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  codeNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  typeOfHome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  propertyFeatures: {
    type: DataTypes.STRING,
  },
  value: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  discription: {
    type: DataTypes.STRING,
  },
  characteristic: {
    type: DataTypes.STRING,
  },
});

  Addres.hasMany(Property);
  Property.belongsTo(Addres, {
    foreignKey: 'addresId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });

(async () => {
  await sequelize.sync({ force: true });
})();
export default Property

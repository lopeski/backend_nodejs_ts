import { Sequelize } from "sequelize";

const sequelize = new Sequelize("${{ secrets.APIKEY }}");

export default sequelize

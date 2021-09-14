"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var connection_1 = __importDefault(require("../database/connection"));
var Addres = connection_1.default.define("addres", {
    id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
    },
    district: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    country: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
});
exports.default = Addres;

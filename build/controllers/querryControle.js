"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var property_1 = __importDefault(require("../models/property"));
var addres_1 = __importDefault(require("../models/addres"));
function getCondicoesAddres(req) {
    var _a, _b, _c, _d;
    var condicoes = {};
    if (req.district) {
        condicoes.district = (_a = {},
            _a[sequelize_1.Op.substring] = req.district,
            _a);
    }
    if (req.city) {
        condicoes.city = (_b = {},
            _b[sequelize_1.Op.eq] = req.city,
            _b);
    }
    if (req.state) {
        condicoes.state = (_c = {},
            _c[sequelize_1.Op.eq] = req.state,
            _c);
    }
    if (req.country) {
        condicoes.country = (_d = {},
            _d[sequelize_1.Op.gte] = req.country,
            _d);
    }
    return condicoes;
}
function getCondicoesProperty(req) {
    var _a, _b, _c, _d, _e, _f;
    var condicoes = {};
    if (req.id) {
        condicoes.title = (_a = {},
            _a[sequelize_1.Op.substring] = req.title,
            _a);
    }
    if (req.codeNumber) {
        condicoes.codeNumber = (_b = {},
            _b[sequelize_1.Op.eq] = req.codeNumber,
            _b);
    }
    if (req.typeOfHome) {
        condicoes.typeOfHome = (_c = {},
            _c[sequelize_1.Op.eq] = req.typeOfHome,
            _c);
    }
    if (req.propertyFeatures) {
        condicoes.propertyFeatures = (_d = {},
            _d[sequelize_1.Op.gte] = req.propertyFeatures,
            _d);
    }
    if (req.discription) {
        condicoes.discription = (_e = {},
            _e[sequelize_1.Op.gte] = req.discription,
            _e);
    }
    if (req.priceMin || req.priceMax) {
        condicoes.value = (_f = {},
            _f[sequelize_1.Op.between] = [req.priceMin, req.priceMax],
            _f);
    }
    return condicoes;
}
exports.default = {
    addres: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var pagination;
            return __generator(this, function (_a) {
                pagination = req.body.pagination;
                addres_1.default.findAll({
                    where: getCondicoesAddres(req.body),
                    limit: 5,
                    offset: pagination,
                })
                    .then(function (item) { return res.status(200).send(item); })
                    .catch(function (e) { return res.status(400).send(e); });
                return [2];
            });
        });
    },
    property: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var pagination;
            return __generator(this, function (_a) {
                pagination = req.body.pagination;
                property_1.default.findAll({
                    where: getCondicoesProperty(req.body),
                    limit: 5,
                    offset: pagination,
                })
                    .then(function (item) { return res.status(200).send(item); })
                    .catch(function (e) { return res.status(400).send(e); });
                return [2];
            });
        });
    },
};

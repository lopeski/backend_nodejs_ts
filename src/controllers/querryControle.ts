import { Request, Response } from 'express';
import { Op } from 'sequelize';
import Property from '../models/property';
import Addres from '../models/addres';

interface PropertyAttributes {
  id: number;
  title: void;
  codeNumber: string;
  typeOfHome: string;
  propertyFeatures: string;
  value: number;
  discription: string;
  characteristic : string;
  priceMin: number;
  priceMax: number;
}

interface AddresAttributes {
  id: number;
  district: string;
  city: string;
  state: string;
  country: string;
}

function getCondicoesAddres(req:AddresAttributes) {
  let condicoes:any = {};
  if (req.district) {
    condicoes.district = {
      [Op.substring]: req.district,
    };
  }
  if (req.city) {
    condicoes.city = {
      [Op.eq]: req.city,
    };
  }
  if (req.state) {
    condicoes.state = {
      [Op.eq]: req.state,
    };
  }
  if (req.country) {
    condicoes.country = {
      [Op.gte]: req.country,
    };
  }
  return condicoes;
}


function getCondicoesProperty(req:PropertyAttributes) {
  let condicoes:any = {};
  if (req.id) {
    condicoes.title = {
      [Op.substring]: req.title,
    };
  }
  if (req.codeNumber) {
    condicoes.codeNumber = {
      [Op.eq]: req.codeNumber,
    };
  }
  if (req.typeOfHome) {
    condicoes.typeOfHome = {
      [Op.eq]: req.typeOfHome,
    };
  }
  if (req.propertyFeatures) {
    condicoes.propertyFeatures = {
      [Op.gte]: req.propertyFeatures,
    };
  }
  if (req.discription) {
    condicoes.discription = {
      [Op.gte]: req.discription,
    };
  }
  if (req.priceMin || req.priceMax) {
    condicoes.value = {
      [Op.between]: [req.priceMin, req.priceMax],
    };
  }
  return condicoes;
}

export default {
  async addres(req: Request, res: Response) {
    const { pagination } = req.body;
    Addres.findAll({
      where: getCondicoesAddres(req.body),
      limit: 5,
      offset: pagination,
    })
      .then((item: any) => res.status(200).send(item))
      .catch((e: any) => res.status(400).send(e))
  },
  async property(req: Request, res: Response) {
    const { pagination } = req.body;
    Property.findAll({
      where: getCondicoesProperty(req.body),
      limit: 5,
      offset: pagination,
    })
      .then((item: any) => res.status(200).send(item))
      .catch((e: any) => res.status(400).send(e))
  },
}

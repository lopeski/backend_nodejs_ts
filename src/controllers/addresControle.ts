import { Request, Response } from 'express';
import Addres from '../models/addres';


interface PropertyNew {
  id: number;
  district: string;
  city: string;
  state: string;
  country: string;
}

function preparObje(body:PropertyNew, content:any, res:Response) {

  if (body.id) {
    content.id = body.id
  }
  if (body.district) {
    content.district = body.district
  }
  if (body.city) {
    content.city = body.city
  }
  if (body.state) {
    content.state = body.state
  }
  if (body.country) {
    content.country = body.country
  }
  content.save()
  res.status(200).send({ mensage: "CONCLUIDO" })
}

export default {
  async get(req: Request, res: Response) {
    const { id } = req.body;
    Addres.findByPk(id)
      .then((item: any) => res.status(200).send(item))
      .catch((e: any) => res.status(400).send(e))
  },
  async create(req: Request, res: Response) {
    const { district } = req.body;
    const addres = await Addres.findOne({
      where: {
        district,
      }
    })
    if (addres) {
      return res.status(404).send({ erro: "erro"})
    } else {
      Addres.create(req.body)
        .then((item: any) => {
          res.status(200).send({item})
        })
        .catch((e: any) => res.status(404).send(e))

    }
  },
  async update(req: Request, res: Response) {
    const { id } = req.body;
    let pro = await Addres.findByPk(id);
    if (pro) {
      preparObje(req.body, pro, res);
    } else {
      return res.status(404).send({ erro: "erro encontrado"});
    }
  },
  async delete(req: Request, res: Response) {
    const { id } = req.body;
    const pro = await Addres.findByPk(id);
    if (pro) {
      await pro.destroy();
      return res.status(200).send({ mensage: "CONCLUIDO" })
    } else {
      return res.status(404).send({ erro: "erro encontrado"});
    }
  }
}

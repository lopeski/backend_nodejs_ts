import { Request, Response } from 'express';
import Property from '../models/property';
import Addres from '../models/addres';

interface PropertyNew {
  id: number;
  title: string;
  codeNumber: string;
  typeOfHome: string;
  neighborhood: string;
  address: string;
  propertyFeatures: string;
  value: number;
  discription: string;
  characteristic: string;
}

function preparObje(body:PropertyNew, content:any, res:Response) {

  if (body.id) {
    content.id = body.id
  }
  if (body.title) {
    content.title = body.title
  }
  if (body.codeNumber) {
    content.codeNumber = body.codeNumber
  }
  if (body.typeOfHome) {
    content.typeOfHome = body.typeOfHome
  }
  if (body.neighborhood) {
    content.neighborhood = body.neighborhood
  }
  if (body.address) {
    content.address = body.address
  }
  if (body.propertyFeatures) {
    content.propertyFeatures = body.propertyFeatures
  }
  if (body.value) {
    content.value = body.value
  }
  if (body.discription) {
    content.discription = body.discription
  }
  if (body.characteristic) {
    content.characteristic = body.characteristic
  }
  content.save()
  res.status(200).send({ mensage: "CONCLUIDO" })
}

export default {
  async get(req: Request, res: Response) {
    const { id } = req.body;
    Property.findByPk(id)
      .then((item: any) => {
        if (item) {
          res.status(200).send(item)
        } else {
          res.status(200).send({ mensage: "nem um conteudo encontrado"})
        }
      })
      .catch((e: any) => res.status(400).send(e))
  },

  async create(req: Request, res: Response) {
    const { title, district, city, state, country } = req.body;

    try {
      const property =  await Property.findOne({
        where: {
          title,
        }
      })

      if (property) {
        res.status(404).send({ erro: "propiedade com esse tiulo ja existe"});
      } else {
        await Addres.findOrCreate({
          raw: true,
          where: {
            district: district,
            city: city,
            state: state,
            country: country,
           },
          defaults: {
            district: district,
            city: city,
            state: state,
            country: country,
          }
        }).then((item: any) => {
          Property.create({...req.body, addresId: item[0].id})
            .then((item: any) => {
              console.log('aqui oq sai');

              res.status(200).send(item)
            })
            .catch((err) => res.status(404).send(err))
        })
      }
    } catch (e) {
    };
  },
  async update(req: Request, res: Response) {
    const { id } = req.body;
    let pro = await Property.findByPk(id);
    if (pro) {
      preparObje(req.body, pro, res);
    } else {
      return res.status(404).send({ erro: "erro encontrado"});
    }
  },
  async delete(req: Request, res: Response) {
    const { id } = req.body;
    const pro = await Property.findByPk(id);
    if (pro) {
      await pro.destroy();
      return res.status(200).send({ mensage: "CONCLUIDO" })
    } else {
      return res.status(404).send({ erro: "erro encontrado"});
    }
  }
};

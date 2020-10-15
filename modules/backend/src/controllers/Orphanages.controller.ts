import { Request, Response } from "express";
import { getRepository } from "typeorm";
import orphanageView from "../views/orphanages_view";
import * as Yup from "yup";

import Orphanage from "../models/Orphanage";

export default {
  async index(req: Request, res: Response) {
    const orphanagesRepository = getRepository(Orphanage);

    const orphanages = await orphanagesRepository.find({ relations: ["images"] });

    return res.json(orphanageView.renderMany(orphanages));
  },

  async show(req: Request, res: Response) {
    let id = req.params.id;
    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = await orphanagesRepository.findOneOrFail(id, { relations: ["images"] });

    return res.json(orphanageView.render(orphanage));
  },

  async create(req: Request, res: Response) {
    const { name, latitude, longitude, instructions, about, opening_hours, open_on_weekends } = req.body;

    const orphanageRepository = getRepository(Orphanage);

    const requestImage = req.files as Express.Multer.File[];
    const images = requestImage.map((image) => {
      return {
        path: image.filename,
      };
    });

    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images,
    };

    const imageSchema = Yup.object().shape({
      path: Yup.string().required(),
    });

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(imageSchema),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const orphanage = orphanageRepository.create(data);

    await orphanageRepository.save(orphanage);

    res.status(201).json(orphanage);
  },
};

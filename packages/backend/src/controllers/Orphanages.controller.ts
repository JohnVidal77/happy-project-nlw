import { Request, Response } from "express";
import { getRepository } from "typeorm";

import Orphanage from "../models/Orphanage";

export default {
  async index(req: Request, res: Response) {
    const orphanagesRepository = getRepository(Orphanage);

    const orphanages = await orphanagesRepository.find();

    return res.json(orphanages);
  },

  async show(req: Request, res: Response) {
    let id = req.params.id;
    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = await orphanagesRepository.findOneOrFail(id);

    return res.json(orphanage);
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

    const orphanage = orphanageRepository.create({
      name,
      latitude,
      longitude,
      instructions,
      about,
      opening_hours,
      open_on_weekends,
      images,
    });

    await orphanageRepository.save(orphanage);

    res.status(201).json(orphanage);
  },
};

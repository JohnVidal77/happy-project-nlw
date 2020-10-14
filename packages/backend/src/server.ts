import express from "express";
import { getRepository } from "typeorm";
import Orphanages from "./models/Orphanages";

import "./database/connection";

const app = express();

app.use(express.json());

app.post("/orphanage/create", async (req, res) => {
  const { name, latitude, longitude, instructions, about, opening_hours, open_on_weekends } = req.body;

  const orphanagesRepository = getRepository(Orphanages);

  const orphanage = orphanagesRepository.create({ name, latitude, longitude, instructions, about, opening_hours, open_on_weekends });

  await orphanagesRepository.save(orphanage);

  res.json({ code: 201, message: "orphanage created" });
});

app.listen(3333);

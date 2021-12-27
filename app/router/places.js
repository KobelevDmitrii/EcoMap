const express = require("express");
const Joi = require("joi");

const auth = require("../middleware/auth");
const Places = require("../db/places");

const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    const placesList = await Places.findAll();

    return res.status(200).json(placesList);
  } catch (error) {
    throw new Error("get places: " + error);
  }
});

const newPlaceSchema = Joi.object().keys({
  name: Joi.string().required(),
  coords: Joi.array().items(Joi.number()).required(),
  type: Joi.string(),
  description: Joi.string(),
});

router.route("/").post(auth, async (req, res) => {
  try {
    const result = newPlaceSchema.validate(req.body);
    if (result.error) {
      return res
        .status(422)
        .send({ message: "invalid place data: " + result.error });
    }

    const { name, coords, type, description } = req.body;

    const newPlace = {
      name: name,
      coords: "(" + coords[0] + "," + coords[1] + ")",
      type: type,
      description: description,
      verified: false,
    };

    const savedPlace = await Places.save(newPlace);

    return res.status(201).json(savedPlace);
  } catch (error) {
    throw new Error("create place: " + error);
  }
});

module.exports = router;

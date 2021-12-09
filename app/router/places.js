const express = require("express");
const Joi = require("joi");

const auth = require("../middleware/auth");
const Places = require("../db/places");

const router = express.Router();

const newPlaceSchema = Joi.object().keys({
  name: Joi.string().email().required(),
  coords: Joi.array().items(Joi.number()).required(),
  type: Joi.string(),
  description: Joi.string(),
});

router.route("/create").post(auth, async (req, res) => {
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
      coords: coords,
      type: type,
      description: description,
    };

    const savedPlace = await Places.save(newPlace);

    return res.status(201).json(savedPlace);
  } catch (error) {
    throw new Error("create place: " + error);
  }
});

module.exports = router;

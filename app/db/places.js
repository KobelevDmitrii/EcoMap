const db = require("./db");

const findById = async (id) => {
  try {
    const query = {
      text: "SELECT * FROM places WHERE id = $1",
      values: [id],
    };

    const res = await db.query(query);

    return res.rows[0];
  } catch (error) {
    throw new Error("find place by id: " + error);
  }
};

const save = async (place) => {
  try {
    const query = {
      text: "INSERT INTO visits (name, coords, type, description, verified) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      values: [
        place.name,
        place.coords,
        place.type,
        place.description,
        place.verified,
      ],
    };

    const res = await db.query(query);

    return res.rows[0];
  } catch (error) {
    throw new Error("save place: " + error);
  }
};

module.exports = {
  findById,
  save,
};

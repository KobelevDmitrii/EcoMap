const db = require("./db");

const findById = async (id) => {
  try {
    const query = {
      text: "SELECT * FROM visits WHERE id = $1",
      values: [id],
    };

    const res = await db.query(query);

    return res.rows[0];
  } catch (error) {
    throw new Error("find visit by id: " + error);
  }
};

const save = async (visit) => {
  try {
    const query = {
      text: "INSERT INTO visits (user_id, place_id, counter) VALUES ($1, $2, $3) RETURNING *",
      values: [
        visit.user_id,
        visit.place_id,
        visit.counter,
      ],
    };

    const res = await db.query(query);

    return res.rows[0];
  } catch (error) {
    throw new Error("save visit: " + error);
  }
};

module.exports = {
  findById,
  save,
};
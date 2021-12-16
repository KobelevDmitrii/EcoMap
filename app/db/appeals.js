const db = require("./db");

const findById = async (id) => {
  try {
    const query = {
      text: "SELECT * FROM appeals WHERE id = $1",
      values: [id],
    };

    const res = await db.query(query);

    return res.rows[0];
  } catch (error) {
    throw new Error("find appeal by id: " + error);
  }
};

const save = async (appeal) => {
  try {
    const query = {
      text: "INSERT INTO appeals (user_id, date, title, content, updated, answer) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      values: [
        appeal.user_id,
        appeal.date,
        appeal.title,
        appeal.content,
        appeal.updated,
        appeal.answer,
      ],
    };

    const res = await db.query(query);

    return res.rows[0];
  } catch (error) {
    throw new Error("save appeal: " + error);
  }
};

module.exports = {
  findById,
  save,
};

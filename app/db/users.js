const db = require("./db");

const findByEmail = async (email) => {
  try {
    const query = {
      text: "SELECT * FROM users WHERE email = $1",
      values: [email],
    };

    const res = await db.query(query);

    return res.rows[0];
  } catch (error) {
    throw new Error("find user by email: " + error);
  }
};

const findById = async (id) => {
  try {
    const query = {
      text: "SELECT * FROM users WHERE id = $1",
      values: [id],
    };

    const res = await db.query(query);

    return res.rows[0];
  } catch (error) {
    throw new Error("find user by id: " + error);
  }
};

const save = async (user) => {
  try {
    const query = {
      text: "INSERT INTO users (firstname, lastname, email, hashed_password, salt, role) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      values: [
        user.firstname,
        user.lastname,
        user.email,
        user.hashed_password,
        user.salt,
        user.role,
      ],
    };

    const res = await db.query(query);

    return res.rows[0];
  } catch (error) {
    throw new Error("save user: " + error);
  }
};

module.exports = {
  findByEmail,
  findById,
  save,
};

const up = async (pgm) => {
  pgm.createTable("users", {
    id: "id",
    firstname: { type: "varchar(50)", notNull: true },
    lastname: { type: "varchar(50)", notNull: true },
    email: { type: "varchar(200)", notNull: true, unique: true },
    hashed_password: { type: "varchar(400)", notNull: true },
    role: { type: "varchar(50)", notNull: true, default: "user" },
    salt: { type: "varchar(400)", notNull: true },
  });

  pgm.createTable("places", {
    id: "id",
    name: { type: "varchar(50)", notNull: true },
    coords: { type: "point", notNull: true },
    type: { type: "varchar(50)" },
    description: { type: "text" },
    verified: { type: "boolean", notNull: true, default: "false" },
  });

  pgm.createTable("visits", {
    user_id: { type: "integer", notNull: true, references: "users" },
    place_id: {
      type: "integer",
      notNull: true,
      references: "places",
      onDelete: "cascade",
    },
  });
};

exports.up = up;

const { hash } = require("bcryptjs");

exports.seed = async function (knex) {
  await knex("users").del();
  await knex("users").insert([
    {
      name: "User Admin",
      email: "admin@mail.com",
      password: await hash("admin123", 8),
      isAdmin: true,
    },
    {
      name: "User",
      email: "user@mail.com",
      password: await hash("123123", 8),
      isAdmin: false,
    },
  ]);
};

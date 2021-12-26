const request = require("supertest");
const assert = require("assert");

var app = require("./app").app;

it("should register user", (done) => {
  let registerUser = {
    email: "email@mail.ru",
    password: "password",
    firstname: "first",
    lastname: "last",
  };

  request(app)
    .post("/users/register")
    .send(registerUser)
    .expect((response) => {
      assert.notEqual(response.body.access_token, undefined);
      assert.notEqual(response.body.access_token, "");
    })
    .end(done);
});

it("should login user", (done) => {
  let loginUser = {
    email: "email@mail.ru",
    password: "password",
  };

  request(app)
    .post("/users/login")
    .send(loginUser)
    .expect((response) => {
      assert.notEqual(response.body.access_token, undefined);
      assert.notEqual(response.body.access_token, "");
    })
    .end(done);
});

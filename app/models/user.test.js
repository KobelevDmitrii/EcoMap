const User = require("./user");
const assert = require("assert");

it("should hash password with salt", () => {
  let passwd = "1234";

  const { hash, salt } = User.hashPassword(passwd);
  const { resHash } = User.hashPassword(passwd, salt);

  assert.equal(hash, resHash);
});

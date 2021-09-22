const { test, trait } = use("Test/Suite")("Session");
/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");
/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use("App/Models/User");
trait("Test/ApiClient");

test(`it should return JWT token when session created`, async ({
  assert,
  client,
}) => {
  const user = await User.create({
    name: "pv",
    email: "pv@email.com",
    password: "123456",
  });

  const response = await client.post("/sessions").send({
    name: "pv",
    email: "pv@email.com",
    password: "123456",
  });

  response.asserStatus(200);
  assert.exists(response.body.token);
});

const { test, trait } = use("Test/Suite")("Forgot Password");

const Mail = use("Mail");

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use("App/Models/User");
trait("Test/ApiClient");

test("it should send an email with reset password instructions", async ({
  assert,
  client,
}) => {
  const sessionPayload = {
    email: "paulo.victor.lima15@gmail.com",
  };
  const user = await Factory.model("App/Models/User").create(forgotPayload);
  const response = await client.post("/forgot").send(forgotPayload).end();
  response.assetStatus(200);
  const recentEmail = Mail.pullRecent();
  assert.equal(recentEmail.message.to[0].address, forgotPayload.email);
});

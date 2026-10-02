const User = require("../models/User");

describe("User Model", () => {
test("should require name, email and password", async () => {
  const user = new User();

  await expect(user.validate()).rejects.toMatchObject({
    errors: expect.objectContaining({
      name: expect.any(Object),
      email: expect.any(Object),
      password: expect.any(Object),
    }),
  });
});

  test("should use USER as default role", () => {
    const user = new User({
      name: "Test User",
      email: "test@example.com",
      password: "password123",
    });

    expect(user.role).toBe("USER");
  });
});

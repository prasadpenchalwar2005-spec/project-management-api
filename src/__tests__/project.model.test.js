const Project = require("../models/Project");

describe("Project Model", () => {
  test("should require title and createdBy", async () => {
    const project = new Project();

    await expect(project.validate()).rejects.toMatchObject({
      errors: expect.objectContaining({
        title: expect.any(Object),
        createdBy: expect.any(Object),
      }),
    });
  });

  test("should use ACTIVE as default status", () => {
    const project = new Project({
      title: "Test Project",
      createdBy: "507f1f77bcf86cd799439011",
    });

    expect(project.status).toBe("ACTIVE");
  });
});

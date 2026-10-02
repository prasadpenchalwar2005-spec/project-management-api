const Task = require("../models/Task");

describe("Task Model", () => {
  test("should require title, projectId and assignedUser", async () => {
    const task = new Task();

    await expect(task.validate()).rejects.toMatchObject({
      errors: expect.objectContaining({
        title: expect.any(Object),
        projectId: expect.any(Object),
        assignedUser: expect.any(Object),
      }),
    });
  });

  test("should use MEDIUM and TODO as default values", () => {
    const task = new Task({
      title: "Test Task",
      projectId: "507f1f77bcf86cd799439011",
      assignedUser: "507f1f77bcf86cd799439012",
    });

    expect(task.priority).toBe("MEDIUM");
    expect(task.status).toBe("TODO");
  });
})
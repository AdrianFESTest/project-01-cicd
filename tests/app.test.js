const request = require("supertest");
const app = require("../src/app");

test("GET /health returns ok status", async () => {
  const response = await request(app).get("/health");

  expect(response.status).toBe(200);
  expect(response.body).toEqual({ status: "ok" });
});

test("GET /message returns the default message", async () => {
  const response = await request(app).get("/message");

  expect(response.status).toBe(200);
  expect(response.body).toEqual({ message: "world" });
});

test("GET /hello/:name returns a personalized message", async () => {
  const response = await request(app).get("/hello/Adrian");

  expect(response.status).toBe(200);
  expect(response.body).toEqual({ message: "Hello, Adrian!" });
});

test("POST /add returns the sum of two numbers", async () => {
  const response = await request(app).post("/add").send({ a: 10, b: 5 });

  expect(response.status).toBe(200);
  expect(response.body).toEqual({ result: 15 });
});

test("POST /add rejects invalid input", async () => {
  const response = await request(app).post("/add").send({ a: 10, b: "wrong" });

  expect(response.status).toBe(400);
  expect(response.body).toEqual({
    error: "Both a and b must be numbers",
  });
});

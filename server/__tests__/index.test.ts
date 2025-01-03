import app from "../src/index";

import request from "supertest";

describe("Test index.ts", () => {

  test("Home Page route", async () => {
    const res = await request(app).post("/po");
    expect(res.body).toEqual({ message: "Hello World!" });
  });

  test("Home Page route", async () => {
    const res = await request(app).get("/");
    expect(res.body).toEqual({ message: "Hello World!" });
  });
});
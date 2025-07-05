import { Hono } from "hono";

const barApp = new Hono().get("/ping", (c) => c.json({ message: "bar ping" }));

export { barApp };

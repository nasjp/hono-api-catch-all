import { Hono } from "hono";
import { barApp } from "./bar";

export const app = new Hono()
	.basePath("/api")
	.get("/ping", (c) => c.json({ message: "ping" }))
	.route("/bar", barApp);

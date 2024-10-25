import { Hono } from "hono";
import { cors } from 'hono/cors'
import userRoutes from "./src/routes/userRoutes.ts";
// import mongo from "./src/config/mongo.ts";

const app = new Hono();

// Connect to MongoDB
// await mongo.connect();

app.use('*', cors())
// Your own routes here
app.route('/users', userRoutes)

app.get("/", (c) => {
  return c.text("Deno Hono API is running!");
});

app.get("/hello", (c) => {
  return c.text("Hello, world!!");
});

Deno.serve({ port: Number(Deno.env.get("PORT")) || 3000 }, app.fetch);

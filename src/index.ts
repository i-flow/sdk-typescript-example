import express from "express";

import dotenv from "dotenv";
dotenv.config();

import { authMiddleware } from "./middleware/auth-middleware";
import { jsonParser } from "./middleware/json-parser";
import { healthController } from "./controllers/health-controller";
import { servicesController } from "./controllers/services-controller";
import { service1Controller } from "./controllers/service1-controller";
import { service2Controller } from "./controllers/service2-controller";



const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(jsonParser);
app.use(authMiddleware);

// Routes
app.get("/health", healthController);
app.get("/services", servicesController);
app.get("/service1", service1Controller);
app.post("/service2", service2Controller);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
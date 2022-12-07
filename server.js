/*----------------------
Dependencies and Imports
------------------------*/
const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");

// routers
const analyticsQueryRouter = require("./src/routers/analyticsQueryRouter");

// constants
const PORT = require("./constants/appConfig").PORT;

// swagger for documentation
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

// configure application
dotenv.config();
const app = express();
app.set("port", PORT);
// use morgan logger here

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// add routes to server
app.use("/analytics", analyticsQueryRouter);
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// for any endpoint that is not found, follow this route
app.use("*", (req, res) => {
    console.error(`Endpoint not found: ${req.originalUrl}`);
    return res.status(400).json({
        message: "Endpoint not found",
    });
});

// start server
app.listen(PORT, (err) => {
    if (err) {
        logger.error("there was a problem", err);
        return;
    }
    console.log(`server listening on ${PORT}`);
});

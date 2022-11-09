// external imports
const express = require('express');
const cors = require('cors');

// internal imports
const logRoutes = require('./middleware/logger');
// routes
const gameRouter = require('./routers/gameRouter');

// configuration
const api = express();
api.use(cors());
api.use(express.json());
api.use(logRoutes);

// base route
api.get("/", (req, res) => {
    res.json({
        name: "Humanties App API",
        description: "An API to support our Humanities Game App"
    });
});

api.use("/games", gameRouter);

module.exports = api;
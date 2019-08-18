const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const locationsRoute = require("./locationRoute");
const locationsRoutes = require("./locationsRoute");

const appRouter = express();

appRouter.use(bodyParser.urlencoded({ extended: false }));
appRouter.use(bodyParser.json());

appRouter.use('/api/v1/location', locationsRoute);
appRouter.use('/api/v1/locations', locationsRoutes);

appRouter.use(express.static("./ui_build"));
//default route
appRouter.use(function (req, res) {
    res.sendFile(path.resolve("./ui_build", 'index.html'));
});


module.exports = appRouter;
const { Router } = require("express")

const {
    createActivityHandler,
    getActivitiesCountriesHandler,
} = require("../handlers/activitiesHandler")

const activiesRouter = Router();

activiesRouter.get("/" , getActivitiesCountriesHandler)

activiesRouter.post("/", createActivityHandler)

module.exports = activiesRouter;
const { Router } = require("express")

const {
    createActivityHandler,
    getActivitiesCountriesHandler,
    postActivityHandler
} = require("../handlers/activitiesHandler")

const activiesRouter = Router();

activiesRouter.get("/" , getActivitiesCountriesHandler)

activiesRouter.post("/", createActivityHandler )

activiesRouter.post("/send", postActivityHandler )

module.exports = activiesRouter;
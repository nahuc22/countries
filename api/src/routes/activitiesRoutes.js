const { Router } = require("express")

const {
    getActivitiesCountriesHandler,
    postActivityHandler
} = require("../handlers/activitiesHandler")

const activiesRouter = Router();

activiesRouter.get("/" , getActivitiesCountriesHandler)


activiesRouter.post("/send", postActivityHandler )

module.exports = activiesRouter;
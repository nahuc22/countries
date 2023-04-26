const { Router } = require("express")
const { 
    getCountryByNameHandler,  
    getCountryByIdHandler,
    getAllCountriesHandler,
} = require("../handlers/countriesHandler");

const countriesRouter = Router();

countriesRouter.get("/", getCountryByNameHandler)

countriesRouter.get("/", getAllCountriesHandler)

countriesRouter.get("/:id", getCountryByIdHandler)

module.exports = countriesRouter;
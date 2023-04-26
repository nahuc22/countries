const { createActivity  } = require("../controllers/activityController");

const getActivitiesCountriesHandler = (req, res) => {

    res.status(200).send("Estas son las actividades")
}

const createActivityHandler = async (req, res) => {
    
    const data = req.body;
    try
    {
    const newActivity = await createActivity(data);
    res.status(201).json(newActivity)
    } catch (error){
        res.status(400).json({ error: error.message})
    }
}
module.exports = {
    getActivitiesCountriesHandler,
    createActivityHandler
}   
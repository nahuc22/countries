const  {createActivity, getActivities}  = require("../controllers/activityController");

const getActivitiesCountriesHandler = async (req, res) => {

    try {
        const actividad = await getActivities();
        res.status(200).json({ actividad });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
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
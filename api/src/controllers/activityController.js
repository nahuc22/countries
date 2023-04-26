const { Activities } = require("../db.js");

const createActivity = async(data) => {
    const response = await Activities.create(data);
    return response.dataValues;
}

module.exports = {
    createActivity
}
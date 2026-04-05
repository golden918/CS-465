const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

// GET all trips
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsList = async (req, res) => {
    const q = await Model
        .find({}) //no filters, return all documents
        .exec();

        console.log(q);
    if(!q) {
        return res
            .status(404)
            .json({"message": "No trips found"});
    } else {
        return res
            .status(200)
            .json(q);
    }
};

const tripsFindByCode = async (req, res) => {
    const q = await Model
        .findOne({code: req.params.tripCode})
        .exec();

        console.log(q);
    if(!q) {
        return res
            .status(404)
            .json({"message": "Trip code not found"});
    } else {
        return res
            .status(200)
            .json(q);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};
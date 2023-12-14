const {Router} = require("express");
const secretMiddleware = require("../lib/middlewares/secretMiddleware");
const { Event } = require("../lib/models");

const api = Router();

api.get("/key", secretMiddleware, (req, res) => res.status(200).json({message: "OK"}));
api.get("/events/by/:category", secretMiddleware,async (req, res) => {
    const {category} = req.params;
    let currentDate = new Date();

    const evs = await Event.find({
        ...(category === "all" ? {} : {type: category}),
        datetime: {
            $gt: currentDate
        }     
    });
    return res.status(200).json(evs);
});
api.post("/events", secretMiddleware,async (req,res) => {
    const {datetime, name, extra, type} = req.body;
    const d = await Event.create({
        datetime,extra,name,type
    });
    await d.save();
    return res.json(d);
});
api.delete("/events/:id", secretMiddleware,async (req, res) => {
    await Event.deleteOne({
        _id: req.params.id
    })
    res.status(200);
});
api.get("/events/:id", secretMiddleware, async (req, res) => {
    const a = await Event.findOne({
        _id: req.params.id
    })
    console.log(req.params, a)
    res.json(a)
});
module.exports = api;
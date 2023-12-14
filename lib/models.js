const mongoose = require("mongoose");

const EventSchena = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    datetime: {
        type: mongoose.Schema.Types.Date,
        required: true
    },
    extra: {
        type: String,
        required: true
    },
    type: {
        type: String
    }
});

const Event = mongoose.model("events", EventSchena);
module.exports.Event = Event;
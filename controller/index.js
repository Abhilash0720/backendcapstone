const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuerySchema = new Schema({
    title: {
        type: String,
        minlength: 5,
        maxlength: 255,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    subCategory: {
        type: String,
    },
    description: {
        type: String,
        minlength: 5,
        maxlength: 1000,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },
    preferredLanguage: {
        type: String,
        required: true,
    },
    availableTime: {
        from: {
            type: String,
            required: true,
        },
        till: {
            type: String,
            required: true,
        },
    },
})

const Query = model("Query", QuerySchema);

module.export = Query
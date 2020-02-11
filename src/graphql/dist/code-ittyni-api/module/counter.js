"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var CountSchema = new mongoose_1.Schema({
    user: {
        type: Number,
        unique: true
    },
    tests: {
        type: Number,
        unique: true
    },
    labs: {
        type: Number,
        unique: true
    },
    Medicines: {
        type: Number,
        unique: true
    }
});
exports.Count = mongoose_1.model('Count', CountSchema);

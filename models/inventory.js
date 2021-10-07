const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
     img: { type: String, required: true },
});

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;
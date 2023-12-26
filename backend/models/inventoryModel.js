const mongoose = require("mongooose");

const inventorySchema = mongoose.Schema({
   name: String,
   description: String,
   qty: Number

});

const InventoryModel = mongoose.model("Inventory", inventorySchema);
module.exports = InventoryModel;
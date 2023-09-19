const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
    event_name: String,
    field_list: {
      type:JSON,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("event", eventSchema);

// Import Mongoose
const mongoose = require("mongoose");

// Reference Schema Constructor
const Schema = mongoose.Schema;

// Create new schema object
const NoteSchema = new Schema({
  _headlineId: {
    type: Schema.Types.ObjectId,
    ref: "Headline"
  },
  date: String,
  text: String
});

// Create the model
const Note = mongoose.model("Note", NoteSchema);

// Export the model
module.exports = Note;
const mongoose = require("mongoose");
const noteSchema = {
    fname: String,
 mail : String,
 phone : String,
 pass : String
}
const Note = mongoose.model("Note", noteSchema);

module.exports= Note;

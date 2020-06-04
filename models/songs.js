const mongoose = require('mongoose');

const songsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    entry: { type: String, required: true },
    song: { type: String, required: true }
  }
)

const Songs = mongoose.model('Songs', songsSchema);

module.exports = Songs;

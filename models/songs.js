const mongoose = require('mongoose');

const songsSchema = new mongoose.Schema(
  {
    title: String,
    entry: String,
    song: String
  }
)

const Songs = mongoose.model('Songs', songsSchema);

module.exports = Songs;

const mongoose = require('mongoose');

const cameraSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  lenses: { type: [String], required: true },
  imageUrl: { type: String, required: true }
});

// $.getURL('http://localhost:3000/api/cameras', function(data) {
//   console.log(data);
// });


module.exports = mongoose.model('Camera', cameraSchema);
var Location = require('../../models/location');

// List of locations
exports.index = function (req, res) {
  Location.find({}, function (err, locations) {
    if (err) {
      return res.status(500).send({ error: err.message });
    }
    res.send(locations);
  });
};

// Create a location
exports.create = function (req, res) {
  var location = new Location(req.body);
  location.save(function (err) {
    if (err) {
      return res.status(400).send({ error: err.message });
    }
    res.send(location);
  });
};

// Show a location
exports.show = function (req, res) {
  var id = req.params.id;
  Location.findById(id, function (err, location) {
    if (err) {
      return res.status(404).send({ error: err.message });
    }
    res.send(location);
  });
};

// Update a location
exports.update = function (req, res) {
  var id = req.params.id;
  Location.findByIdAndUpdate(id, req.body, function (err, location) {
    if (err) {
      return res.status(400).send({ error: err.message });
    }
    res.send(location);
  });
};

// Delete a location
exports.destroy = function (req, res) {
  var id = req.params.id;
  Location.findByIdAndRemove(id, function (err) {
    if (err) {
      return res.status(400).send({ error: err.message });
    }
    res.status(204).send();
  });
};

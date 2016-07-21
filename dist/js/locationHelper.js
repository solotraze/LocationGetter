var locationHelper = function() {
};

locationHelper.prototype.getLocation = function(callback) {
  if (!navigator.geolocation) {
    callback(null);
  }

  //var options = { timeout: 5000, enableHighAccuracy: true};
  navigator.geolocation.getCurrentPosition(function(position) {
    callback({ latitude: position.coords.latitude, longitude: position.coords.longitude});
  });//, null, options);
};

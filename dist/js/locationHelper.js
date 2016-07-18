var locationHelper = function() {
};

locationHelper.prototype.getLocation = function(callback) {
  if (!navigator.geolocation) {
    callback(null);
  }

  navigator.geolocation.getCurrentPosition(function(position) {
    callback({ latitude: position.coords.latitude, longitude: position.coords.longitude});
  });
};

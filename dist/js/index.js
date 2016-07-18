$(document).ready(function() {
  $('#btnGetLocation').click(function() {
    var lc = new locationHelper();
    lc.getLocation(function(position) {
      $('#dvContent').text(position.latitude + ',' + position.longitude);
    });
  });
});

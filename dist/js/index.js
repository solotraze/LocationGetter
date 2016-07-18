$(document).ready(function() {
  $('#btnGetLocation').click(function() {
    var lc = new locationHelper();
    var location = lc.getLocation();
    $('#dvContent').text(location);
  });
});

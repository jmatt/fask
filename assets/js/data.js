var data = null;
var faskData = {
  getData: function() {
    return $.ajax( "/data" )
           .done(function(value) {
             data = value;
           })
           .fail(function() {
             alert( "error" );
           })
  }
};
faskData.getData();
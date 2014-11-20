var meta = {
    getAppVersion: function() {
      return navigator.appVersion;
    }
};
$('#meta-application-version').html(meta.getAppVersion());
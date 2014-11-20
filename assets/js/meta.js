var faskMeta = {
    getAppVersion: function() {
      return navigator.appVersion;
    }
};

$('#meta-application-version').html(faskMeta.getAppVersion());
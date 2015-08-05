/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'xxx',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    contentSecurityPolicy: {
      'default-src': "'self' *.googlesyndication.com",
      'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com maps.gstatic.com *.tiles.mapbox.com",
      'script-src': "'self' 'unsafe-eval' 'unsafe-inline' *.googleapis.com maps.gstatic.com *.googlesyndication.com api.mapbox.com",
      'frame-src': "'self' *.doubleclick.net *.googlesyndication.com",
      'font-src': "'self' fonts.gstatic.com",
      'img-src': "'self' *.googleapis.com maps.gstatic.com csi.gstatic.com maps.google.com *.tiles.mapbox.com api.mapbox.com data:",
      'style-src': "'self' 'unsafe-inline' fonts.googleapis.com maps.gstatic.com api.mapbox.com"
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
        mapbox: {
                        accessToken: 'pk.eyJ1IjoibWljaGFsYnJ5eGkiLCJhIjoiODA4NzFiZjMzOGM1ZWQ5ZmRlNjQ1YTRmZGY2OTU1YTAifQ.N7Xi6W8uh-esclCYf4r2kQ',
                              mapId: 'michalbryxi.n3c21f6f'
                                    }

  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};

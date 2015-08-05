import Ember from 'ember';


export default Ember.Controller.extend({
  markers: [{
      // this feature is in the GeoJSON format: see geojson.org
      // for the full specification
      type: 'Feature',
      geometry: {
          type: 'Point',
          // coordinates here are in longitude, latitude order because
          // x, y is the standard for GeoJSON and many formats
          coordinates: [
            49.7,
            13.4
          ]
      },
      properties: {
          title: 'Peregrine Espresso',
          description: '1718 14th St NW, Washington, DC',
          // one can customize markers by adding simplestyle properties
          // https://www.mapbox.com/guides/an-open-platform/#simplestyle
          'marker-size': 'large',
          'marker-color': '#BE9A6B',
          'marker-symbol': 'cafe'
      }
  },
  {
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          40.75,
          13.45
        ]
    },
    properties: {
        title: 'pizza locca',
        description: '1718 14th St NW, Washington, DC',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'large',
        'marker-color': '#BE9A6B',
        'marker-symbol': 'cafe'
    }
}]
});

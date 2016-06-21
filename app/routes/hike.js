import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('hike', params.hike_id);
  },

  actions: {
    saveHike(params) {
      var newTrail = this.store.createRecord('trail', params);
      var hike = params.hike;
      hike.get('trails').addObject(newTrail);
      newTrail.save().then(function() {
        return hike.save();
      });
      this.transitionTo('hike', params.hike);
    },
    update(hike, params) {
        Object.keys(params).forEach(function(key) {
          if(params[key]!==undefined) {
            hike.set(key,params[key]);
          }
        });
        hike.save();
        this.transitionTo('index');
      }
  }
});

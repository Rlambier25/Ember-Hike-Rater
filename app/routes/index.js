import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('hike');
  },

  actions: {
    saveHike(hikeInput){
      var newHike = this.store.createRecord('hike', hikeInput);
      newHike.save();
      this.transitionTo('index'); //not necessary
    }
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('hike');
  },

  actions: {
    saveQuestion(hikeInput){
      var newHike = this.store.createRecord('hike', hikeInput);
      newQuestion.save();
      this.transitionTo('index'); //not necessary
    }
  }
});

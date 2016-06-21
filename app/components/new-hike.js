import Ember from 'ember';

export default Ember.Component.extend({
  addNewHike: false,
  actions: {
    showHikeForm() {
      this.set('addNewHike', true);
    },

    saveHike() {
      var hikeInput = {
        country: this.get('country'),
        location: this.get('location')
      };
      this.set('addNewHike', false);
      this.sendAction('saveHike', hikeInput);
    }
  }
});

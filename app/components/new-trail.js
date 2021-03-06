import Ember from 'ember';

export default Ember.Component.extend({
  addNewTrail: false,
    actions: {
      trailFormShow() {
        this.set('addNewTrail', true);
  },

  saveTrail() {
    var params = {
      name: this.get('name'),
      author: this.get('author'),
      review: this.get('review'),
  };
      this.set('addNewTrail', false);
      this.sendAction('saveTrail', params);
    }
  }
});

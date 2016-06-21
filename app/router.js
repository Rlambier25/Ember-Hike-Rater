import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('trail', {path: '/trail/:trail_id'});
  this.route('hike', {path: '/hike/:hike_id'});
});

export default Router;

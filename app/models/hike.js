import DS from 'ember-data';
// import Model from 'ember-data/model';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  country: DS.attr(),
  location: DS.attr(),
  trails: DS.hasMany('trail', { async: true })
});

import DS from 'ember-data';
// import Model from 'ember-data/model';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  review: DS.attr(),
  author: DS.attr(),
  trail: DS.belongsTo('location', { async: true }),
});

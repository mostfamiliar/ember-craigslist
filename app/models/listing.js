import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  location: DS.attr(),
  date: DS.attr(),
  email: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  category: DS.belongsTo('category', { async: true })
});

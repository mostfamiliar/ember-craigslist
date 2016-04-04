import DS from 'ember-data';

export default DS.Model.extend({
    city: DS.attr(),
    name: DS.attr(),
    listings: DS.hasMany('listing', { async: true})
});

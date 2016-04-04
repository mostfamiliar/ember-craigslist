import Ember from 'ember';

export default Ember.Component.extend({
  sortedListings: Ember.computed.sort('category.listings', 'sortDefinition'),
  sortBy: 'date',
  sortDefinition: Ember.computed('sortBy', function(){
    return [ this.get('sortBy') ];
  })
});

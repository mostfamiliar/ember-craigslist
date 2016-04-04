import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['date:asc'],
  sortedByDate: Ember.computed.sort('category.listings', 'sortBy')
  sortByTitle: ['title:asc'];
  sortedByTitle: Ember.computed.sort('category.listings', 'sortByTitle');
});

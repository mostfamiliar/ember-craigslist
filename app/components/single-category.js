import Ember from 'ember';

export default Ember.Component.extend({
  sortedListings: Ember.computed.sort('category.listings', 'sortDefinition'),
  sortBy: 'date',
  sortDefinition: Ember.computed('sortBy', function(){
    return [ this.get('sortBy') ];
  }),
  actions: {
    updateListing(listing, params) {
      console.log(params);
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined) {
          listing.set(key,params[key]);
        }
      });
      listing.save();
      this.transitionTo('single-category');
    },
    deleteListing(listing) {
      listing.destroyRecord();
      this.transitionTo('single-category');
    }
  }
});

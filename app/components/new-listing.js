import Ember from 'ember';

export default Ember.Component.extend({
  addNewListing: false,
  actions: {
    listingFormShow() {
      this.set('addNewListing', true);
    },
    saveListing() {
      var params = {
        title: this.get('title'),
        location: this.get('location'),
        date: this.get('date'),
        description: this.get('description'),
        image: this.get('image'),
        category: this.get('category')
      };
      this.sendAction('saveListing', params);
      this.set('addNewListing', false);
    }
  }
});

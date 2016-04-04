import Ember from 'ember';

export default Ember.Component.extend({
  editListingForm: false,
  actions: {
    listingFormShow() {
      this.set('editListingForm', true);
    },
    saveListing(listing) {
              console.log(listing);
        var params = {
          title: this.get('title'),
          location: this.get('location'),
          date: this.get('date'),
          email: this.get('email'),
          price: this.get('price'),
          description: this.get('description'),
          image: this.get('image'),
          category: this.get('category')
        };
        
        this.set('editListingForm', false);
        this.sendAction('updateListing', listing, params);

      }
    }
});

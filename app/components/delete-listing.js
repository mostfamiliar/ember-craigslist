import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteListing(listing) {
      this.sendAction('removeListing', listing);
    }
  }
});

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('category', {path: '/category/:category_id'});
  this.route('listing', {path: '/listing/:listing_id'});
  this.route('single-category');
});

export default Router;

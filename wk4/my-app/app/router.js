import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('my-route');
  this.route('clock');
  this.route('plural-name-of-model');
  this.route('timezones');
});

export default Router;

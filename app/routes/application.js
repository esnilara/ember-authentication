import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    error() {
      this.transitionTo('/login');
      return false;
    }
  }
});

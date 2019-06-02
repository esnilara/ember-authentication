import Route from '@ember/routing/route';

export default Route.extend({
  async model() {
    try {
     return await this.store.findAll('code');
    } catch (e) {
      return [];
    }
  }
});

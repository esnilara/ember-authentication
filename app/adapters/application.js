import DS from 'ember-data';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api',
  authManager: service(),

  headers: computed('authManager.accessToken', function() {
    return {
      'Authorization': `Bearer ${this.get('authManager.accessToken')}`
    };
  })
});

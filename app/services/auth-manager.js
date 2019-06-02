import Service from '@ember/service';
import { bool } from '@ember/object/computed';
import JQuery from 'jquery';

export default Service.extend({
  accessToken: null,
  isAuthenticated: bool('accessToken'),

  async authenticate(username, password) {
    try {
      const result = await JQuery.ajax({
        method: 'POST',
        url: 'token',
        data: { username, password }
      });

      this.set('accessToken', result.access_token);
    } catch (err) {
      return err;
    }
  },

  invalidate() {
    this.set('accessToken', null);
  }
});

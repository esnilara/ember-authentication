import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  authManager: service('session'),

  actions: {
    async authenticate() {
      try {
        const { username, password } = this.getProperties('username', 'password');
        await this.get('authManager').authenticate('authenticator:oauth2', username, password);

        alert('Success! Click the top link!');
      } catch (err) {
        alert(`Error obtaining token: ${err.responseText}`);
      }
    }
  }
});

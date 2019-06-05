import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend({
  // use me to override token endpoint if needed.
  // serverTokenEndpoint: '/meep'
});

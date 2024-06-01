'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/impressions/me',
      handler: 'api::impression.impression.me',
      config: {
        auth: {
          scope: ['api::impression.impression.find']
        },
        policies: [],
      },
    },
  ],
};

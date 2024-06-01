// src/api/impression/controllers/impression.js

'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::impression.impression', ({ strapi }) => ({
  async me(ctx) {
    console.log('me method called');
    const user = ctx.state.user;

    if (!user) {
      return ctx.badRequest('No authorization header was found');
    }

    const data = await strapi.service('api::impression.impression').find({
      filters: { user: user.id },
    });

    if (!data || data.length === 0) {
      return ctx.notFound();
    }

    ctx.send(data);
  },
}));

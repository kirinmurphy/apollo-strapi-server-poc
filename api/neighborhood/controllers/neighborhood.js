'use strict';
const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve records.
   *
   * @return {Array}
   */

  async fff(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.neighborhood.search(ctx.query);
    } else {      
      entities = await strapi.services.neighborhood.find(ctx.query);
      entities = entities.filter(entity => entity.name === 'Bucktown');
      strapi.log.debug('test', JSON.stringify(entities));
    }

    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.neighborhood }));
  },
};
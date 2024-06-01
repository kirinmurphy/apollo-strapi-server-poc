'use strict';

/**
 * bite service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bite.bite');

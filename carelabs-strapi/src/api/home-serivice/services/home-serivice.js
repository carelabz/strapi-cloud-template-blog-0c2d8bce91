'use strict';

/**
 * home-serivice service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-serivice.home-serivice');

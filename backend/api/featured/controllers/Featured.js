'use strict';

/**
 * Featured.js controller
 *
 * @description: A set of functions called "actions" for managing `Featured`.
 */

module.exports = {

  /**
   * Retrieve featured records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.featured.fetchAll(ctx.query);
  },

  /**
   * Retrieve a featured record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.featured.fetch(ctx.params);
  },

  /**
   * Count featured records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.featured.count(ctx.query);
  },

  /**
   * Create a/an featured record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.featured.add(ctx.request.body);
  },

  /**
   * Update a/an featured record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.featured.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an featured record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.featured.remove(ctx.params);
  }
};

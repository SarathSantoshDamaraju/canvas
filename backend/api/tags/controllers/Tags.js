'use strict';

/**
 * Tags.js controller
 *
 * @description: A set of functions called "actions" for managing `Tags`.
 */

module.exports = {

  /**
   * Retrieve tags records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.tags.fetchAll(ctx.query);
  },

  /**
   * Retrieve a tags record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.tags.fetch(ctx.params);
  },

  /**
   * Count tags records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.tags.count(ctx.query);
  },

  /**
   * Create a/an tags record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.tags.add(ctx.request.body);
  },

  /**
   * Update a/an tags record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.tags.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an tags record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.tags.remove(ctx.params);
  }
};

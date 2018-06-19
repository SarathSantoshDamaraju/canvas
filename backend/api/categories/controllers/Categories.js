'use strict';

/**
 * Categories.js controller
 *
 * @description: A set of functions called "actions" for managing `Categories`.
 */

module.exports = {

  /**
   * Retrieve categories records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.categories.fetchAll(ctx.query);
  },

  /**
   * Retrieve a categories record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.categories.fetch(ctx.params);
  },

  /**
   * Count categories records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.categories.count(ctx.query);
  },

  /**
   * Create a/an categories record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.categories.add(ctx.request.body);
  },

  /**
   * Update a/an categories record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.categories.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an categories record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.categories.remove(ctx.params);
  }
};

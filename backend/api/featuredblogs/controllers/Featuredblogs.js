'use strict';

/**
 * Featuredblogs.js controller
 *
 * @description: A set of functions called "actions" for managing `Featuredblogs`.
 */

module.exports = {

  /**
   * Retrieve featuredblogs records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.featuredblogs.fetchAll(ctx.query);
  },

  /**
   * Retrieve a featuredblogs record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.featuredblogs.fetch(ctx.params);
  },

  /**
   * Count featuredblogs records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.featuredblogs.count(ctx.query);
  },

  /**
   * Create a/an featuredblogs record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.featuredblogs.add(ctx.request.body);
  },

  /**
   * Update a/an featuredblogs record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.featuredblogs.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an featuredblogs record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.featuredblogs.remove(ctx.params);
  }
};

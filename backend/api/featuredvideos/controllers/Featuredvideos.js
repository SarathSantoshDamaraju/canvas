'use strict';

/**
 * Featuredvideos.js controller
 *
 * @description: A set of functions called "actions" for managing `Featuredvideos`.
 */

module.exports = {

  /**
   * Retrieve featuredvideos records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.featuredvideos.fetchAll(ctx.query);
  },

  /**
   * Retrieve a featuredvideos record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.featuredvideos.fetch(ctx.params);
  },

  /**
   * Count featuredvideos records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.featuredvideos.count(ctx.query);
  },

  /**
   * Create a/an featuredvideos record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.featuredvideos.add(ctx.request.body);
  },

  /**
   * Update a/an featuredvideos record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.featuredvideos.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an featuredvideos record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.featuredvideos.remove(ctx.params);
  }
};

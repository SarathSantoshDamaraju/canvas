'use strict';

/**
 * Featuredfiles.js controller
 *
 * @description: A set of functions called "actions" for managing `Featuredfiles`.
 */

module.exports = {

  /**
   * Retrieve featuredfiles records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.featuredfiles.fetchAll(ctx.query);
  },

  /**
   * Retrieve a featuredfiles record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.featuredfiles.fetch(ctx.params);
  },

  /**
   * Count featuredfiles records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.featuredfiles.count(ctx.query);
  },

  /**
   * Create a/an featuredfiles record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.featuredfiles.add(ctx.request.body);
  },

  /**
   * Update a/an featuredfiles record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.featuredfiles.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an featuredfiles record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.featuredfiles.remove(ctx.params);
  }
};

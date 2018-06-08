'use strict';

/**
 * Files.js controller
 *
 * @description: A set of functions called "actions" for managing `Files`.
 */

module.exports = {

  /**
   * Retrieve files records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.files.fetchAll(ctx.query);
  },

  /**
   * Retrieve a files record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.files.fetch(ctx.params);
  },

  /**
   * Count files records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.files.count(ctx.query);
  },

  /**
   * Create a/an files record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.files.add(ctx.request.body);
  },

  /**
   * Update a/an files record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.files.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an files record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.files.remove(ctx.params);
  }
};

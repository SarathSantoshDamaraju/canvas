'use strict';

/**
 * Externallinks.js controller
 *
 * @description: A set of functions called "actions" for managing `Externallinks`.
 */

module.exports = {

  /**
   * Retrieve externallinks records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.externallinks.fetchAll(ctx.query);
  },

  /**
   * Retrieve a externallinks record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.externallinks.fetch(ctx.params);
  },

  /**
   * Count externallinks records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.externallinks.count(ctx.query);
  },

  /**
   * Create a/an externallinks record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.externallinks.add(ctx.request.body);
  },

  /**
   * Update a/an externallinks record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.externallinks.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an externallinks record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.externallinks.remove(ctx.params);
  }
};

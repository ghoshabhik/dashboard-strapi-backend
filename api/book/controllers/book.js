'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async getAll(ctx) {
        return strapi.config.functions.airtablebooks();
      },
      async updateStatus(ctx) {
        const  id  = ctx.query.id;
        const  status  = ctx.query.status;
        const data = await strapi.config.functions.airtablebooksupdate(id, status);
        console.log('>>>>>>>>>>>>',data);
        return 'Ok';
      },
};

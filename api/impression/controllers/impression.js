'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async me(ctx) {
    const user = ctx.state.user;    
    // console.log('ctx user', user);
    console.log('ctx state', ctx.state);
    // console.log('ctx q', ctx.query);

    if (!user) {
      return ctx.badRequest(null, [
        { messages: [{ id: 'No authorization header was found' }] }
      ]);
    }

    const data = await strapi.services.impression.find({user:user.id});  

    if(!data){
      return ctx.notFound();
    }

    ctx.send(data);
  },
};

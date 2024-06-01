module.exports = {
  // Other plugin configurations
  graphql: {
    enabled: true,
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 14,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
};
